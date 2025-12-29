import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "Admin@hpacsa.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Admin2026@.";

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session.isAdmin) {
    next();
  } else {
    res.status(401).json({ error: "غير مصرح لك بالوصول" });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;

      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        req.session.isAdmin = true;
        res.json({ success: true, message: "تم تسجيل الدخول بنجاح" });
      } else {
        res.status(401).json({ error: "بيانات الدخول غير صحيحة" });
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "حدث خطأ أثناء تسجيل الدخول" });
    }
  });

  app.post("/api/auth/logout", async (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({ error: "حدث خطأ أثناء تسجيل الخروج" });
      } else {
        res.json({ success: true, message: "تم تسجيل الخروج بنجاح" });
      }
    });
  });

  app.get("/api/auth/status", async (req, res) => {
    res.json({ isAuthenticated: !!req.session.isAdmin });
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, submission });
    } catch (error) {
      console.error("Error creating contact submission:", error);
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid submission data" 
      });
    }
  });

  app.get("/api/contact/submissions", requireAuth, async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json({ submissions });
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch submissions" 
      });
    }
  });

  return httpServer;
}
