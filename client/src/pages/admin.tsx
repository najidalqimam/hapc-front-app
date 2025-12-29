import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import { Mail, Phone, User, MessageSquare, RefreshCw, Inbox } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  submittedAt: string;
}

export default function Admin() {
  const { data, isLoading, refetch, isRefetching } = useQuery<{ submissions: ContactSubmission[] }>({
    queryKey: ['/api/contact/submissions'],
    queryFn: async () => {
      const response = await fetch('/api/contact/submissions');
      if (!response.ok) throw new Error('Failed to fetch submissions');
      return response.json();
    },
  });

  const submissions = data?.submissions || [];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <header className="border-b border-border bg-card">
        <div className="container px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary" data-testid="text-admin-title">لوحة التحكم</h1>
              <p className="text-muted-foreground mt-1">إدارة طلبات التواصل</p>
            </div>
            <Button 
              onClick={() => refetch()} 
              variant="outline" 
              disabled={isRefetching}
              data-testid="button-refresh"
            >
              <RefreshCw className={`h-4 w-4 ml-2 ${isRefetching ? 'animate-spin' : ''}`} />
              تحديث
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 py-8">
        <div className="mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Inbox className="h-5 w-5" />
                إجمالي الرسائل
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary" data-testid="text-total-count">
                {isLoading ? <Skeleton className="h-9 w-16" /> : submissions.length}
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-xl font-semibold mb-4">طلبات التواصل</h2>

        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-48 mb-4" />
                  <Skeleton className="h-4 w-32 mb-2" />
                  <Skeleton className="h-4 w-40 mb-2" />
                  <Skeleton className="h-20 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : submissions.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Inbox className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground text-lg">لا توجد رسائل بعد</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <Card key={submission.id} data-testid={`card-submission-${submission.id}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg" data-testid={`text-name-${submission.id}`}>
                          {submission.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {format(new Date(submission.submittedAt), 'PPpp', { locale: ar })}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <a 
                        href={`mailto:${submission.email}`} 
                        className="hover:text-primary transition-colors"
                        data-testid={`link-email-${submission.id}`}
                      >
                        {submission.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground" dir="ltr">
                      <Phone className="h-4 w-4" />
                      <a 
                        href={`tel:${submission.phone}`} 
                        className="hover:text-primary transition-colors"
                        data-testid={`link-phone-${submission.id}`}
                      >
                        {submission.phone}
                      </a>
                    </div>
                  </div>

                  <div className="bg-secondary/50 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <MessageSquare className="h-4 w-4 text-muted-foreground mt-1 shrink-0" />
                      <p className="text-foreground whitespace-pre-wrap" data-testid={`text-message-${submission.id}`}>
                        {submission.message}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
