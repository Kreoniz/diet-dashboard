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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HelpPage() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              <div className="flex items-center justify-between">
                <h1 className="text-xl sm:text-2xl font-bold">
                  Помощь и поддержка
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Часто задаваемые вопросы</CardTitle>
                      <CardDescription>
                        Ответы на распространенные вопросы
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>
                            Как добавить прием пищи?
                          </AccordionTrigger>
                          <AccordionContent>
                            Чтобы добавить прием пищи, перейдите на страницу
                            "Отчеты" и нажмите кнопку "Добавить запись".
                            Заполните форму с информацией о приеме пищи и
                            нажмите "Сохранить".
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger>
                            Как изменить цели питания?
                          </AccordionTrigger>
                          <AccordionContent>
                            Для изменения целей питания перейдите в раздел
                            "Настройки", выберите вкладку "Цели питания" и
                            обновите значения калорий, белков, углеводов и
                            жиров.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                          <AccordionTrigger>
                            Как отслеживать прогресс?
                          </AccordionTrigger>
                          <AccordionContent>
                            Ваш прогресс отображается на главной панели. Вы
                            можете видеть графики изменения веса, потребления
                            калорий и других показателей за выбранный период
                            времени.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                          <AccordionTrigger>
                            Как настроить уведомления?
                          </AccordionTrigger>
                          <AccordionContent>
                            Для настройки уведомлений перейдите в раздел
                            "Настройки", выберите вкладку "Уведомления" и
                            включите или отключите нужные типы уведомлений.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                          <AccordionTrigger>
                            Как экспортировать данные?
                          </AccordionTrigger>
                          <AccordionContent>
                            Для экспорта данных перейдите в раздел "Настройки",
                            выберите вкладку "Данные" и нажмите кнопку
                            "Экспортировать данные". Вы можете выбрать формат
                            экспорта (CSV или PDF).
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Видеоинструкции</CardTitle>
                      <CardDescription>
                        Обучающие видео по использованию приложения
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium mb-2">
                          Начало работы с приложением
                        </h3>
                        <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                          <p className="text-muted-foreground">
                            Видео недоступно
                          </p>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium mb-2">
                          Как вести дневник питания
                        </h3>
                        <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                          <p className="text-muted-foreground">
                            Видео недоступно
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Связаться с поддержкой</CardTitle>
                    <CardDescription>
                      Отправьте сообщение в службу поддержки
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Введите ваше имя" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Введите ваш email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Тема</Label>
                      <Input id="subject" placeholder="Тема сообщения" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea
                        id="message"
                        placeholder="Опишите вашу проблему или вопрос подробно"
                        className="min-h-[150px]"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                    <Button className="w-full sm:w-auto">
                      Отправить сообщение
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
