import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { IconCheck, IconX } from "@tabler/icons-react";

export default function SubscriptionPage() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              <div className="flex items-center justify-between">
                <h1 className="text-xl sm:text-2xl font-bold">Подписка</h1>
              </div>

              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                    <div>
                      <CardTitle>Текущий план</CardTitle>
                      <CardDescription>
                        Управление вашей подпиской
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-green-500 border-green-500 w-fit"
                    >
                      Активна
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                      <div>
                        <h3 className="text-lg font-medium">Премиум</h3>
                        <p className="text-sm text-muted-foreground">
                          Ваша подписка активна до 9 мая 2026
                        </p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="text-lg font-medium">499 ₽/месяц</p>
                        <p className="text-sm text-muted-foreground">
                          Следующий платеж: 9 июня 2025
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">
                      Включено в ваш план:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <IconCheck className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>Неограниченное количество записей питания</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheck className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>Расширенная аналитика и отчеты</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheck className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>Персональные рекомендации по питанию</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheck className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>Экспорт данных в PDF и CSV</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheck className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>Приоритетная техническая поддержка</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Изменить план
                  </Button>
                  <Button variant="destructive" className="w-full sm:w-auto">
                    Отменить подписку
                  </Button>
                </CardFooter>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Базовый</CardTitle>
                    <CardDescription>Для начинающих</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold">Бесплатно</div>
                    <Separator />
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <IconCheck className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>До 10 записей питания в день</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheck className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Базовая аналитика</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IconX className="h-4 w-4 text-red-500 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          Персональные рекомендации
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IconX className="h-4 w-4 text-red-500 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          Экспорт данных
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Текущий план
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-primary">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Премиум</CardTitle>
                      <Badge>Популярный</Badge>
                    </div>
                    <CardDescription>
                      Для активных пользователей
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold">
                      499 ₽<span className="text-sm font-normal">/месяц</span>
                    </div>
                    <Separator />
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <IconCheck className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Неограниченное количество записей</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheck className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Расширенная аналитика</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheck className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Персональные рекомендации</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheck className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Экспорт данных</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Выбрать план</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Семейный</CardTitle>
                    <CardDescription>Для всей семьи</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold">
                      999 ₽<span className="text-sm font-normal">/месяц</span>
                    </div>
                    <Separator />
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <IconCheck className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>До 5 пользователей</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheck className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Все функции Премиум</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheck className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Общее планирование питания</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheck className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Приоритетная поддержка 24/7</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Выбрать план
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
