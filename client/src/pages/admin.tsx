import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import { RefreshCw, Inbox } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

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
      if (!response.ok) {
        throw new Error('Failed to fetch submissions');
      }
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

        <Card>
          <CardContent className="p-0">
            {isLoading ? (
              <div className="p-6 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-6 w-40" />
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-6 flex-1" />
                  </div>
                ))}
              </div>
            ) : submissions.length === 0 ? (
              <div className="p-12 text-center">
                <Inbox className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-lg">لا توجد رسائل بعد</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">الاسم</TableHead>
                    <TableHead className="text-right">البريد الإلكتروني</TableHead>
                    <TableHead className="text-right">رقم الهاتف</TableHead>
                    <TableHead className="text-right">الرسالة</TableHead>
                    <TableHead className="text-right">التاريخ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow key={submission.id} data-testid={`row-submission-${submission.id}`}>
                      <TableCell className="font-medium" data-testid={`text-name-${submission.id}`}>
                        {submission.name}
                      </TableCell>
                      <TableCell>
                        <a 
                          href={`mailto:${submission.email}`} 
                          className="text-primary hover:underline"
                          data-testid={`link-email-${submission.id}`}
                        >
                          {submission.email}
                        </a>
                      </TableCell>
                      <TableCell dir="ltr" className="text-right">
                        <a 
                          href={`tel:${submission.phone}`} 
                          className="text-primary hover:underline"
                          data-testid={`link-phone-${submission.id}`}
                        >
                          {submission.phone}
                        </a>
                      </TableCell>
                      <TableCell className="max-w-xs">
                        <p className="line-clamp-2" data-testid={`text-message-${submission.id}`}>
                          {submission.message}
                        </p>
                      </TableCell>
                      <TableCell className="text-muted-foreground whitespace-nowrap">
                        {format(new Date(submission.submittedAt), 'yyyy/MM/dd HH:mm', { locale: ar })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
