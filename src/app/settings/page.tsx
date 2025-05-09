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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              <div className="flex items-center justify-between">
                <h1 className="text-xl sm:text-2xl font-bold">Настройки</h1>
              </div>

              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="profile">Профиль</TabsTrigger>
                  <TabsTrigger value="goals">Цели питания</TabsTrigger>
                  <TabsTrigger value="notifications">Уведомления</TabsTrigger>
                </TabsList>

                <TabsContent value="profile" className="space-y-4 mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Информация профиля</CardTitle>
                      <CardDescription>
                        Обновите свою личную информацию
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Имя</Label>
                          <Input id="name" defaultValue="Здоровый Чел" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            defaultValue="diet-monster@mail.ru"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">О себе</Label>
                        <Input
                          id="bio"
                          defaultValue="Я стремлюсь к здоровому образу жизни и правильному питанию."
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                      <Button className="w-full sm:w-auto">
                        Сохранить изменения
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Физические параметры</CardTitle>
                      <CardDescription>
                        Обновите свои физические параметры для точного расчета
                        потребностей
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="height">Рост (см)</Label>
                          <Input id="height" type="number" defaultValue="175" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="weight">Вес (кг)</Label>
                          <Input id="weight" type="number" defaultValue="70" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="age">Возраст</Label>
                          <Input id="age" type="number" defaultValue="30" />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                      <Button className="w-full sm:w-auto">
                        Сохранить изменения
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="goals" className="space-y-4 mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Цели питания</CardTitle>
                      <CardDescription>
                        Установите свои ежедневные цели по питанию
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="calories">Калории (ккал)</Label>
                        <Input
                          id="calories"
                          type="number"
                          defaultValue="2000"
                        />
                      </div>
                      <Separator />
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="protein">Белки (г)</Label>
                          <Input
                            id="protein"
                            type="number"
                            defaultValue="100"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="carbs">Углеводы (г)</Label>
                          <Input id="carbs" type="number" defaultValue="250" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="fat">Жиры (г)</Label>
                          <Input id="fat" type="number" defaultValue="65" />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                      <Button className="w-full sm:w-auto">
                        Сохранить изменения
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Цель по весу</CardTitle>
                      <CardDescription>
                        Установите свою цель по весу и темп изменения
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="target-weight">
                            Целевой вес (кг)
                          </Label>
                          <Input
                            id="target-weight"
                            type="number"
                            defaultValue="65"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="weekly-change">
                            Изменение в неделю (кг)
                          </Label>
                          <Input
                            id="weekly-change"
                            type="number"
                            defaultValue="0.5"
                            step="0.1"
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                      <Button className="w-full sm:w-auto">
                        Сохранить изменения
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="notifications" className="space-y-4 mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Настройки уведомлений</CardTitle>
                      <CardDescription>
                        Настройте, какие уведомления вы хотите получать
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                        <div>
                          <p className="font-medium">
                            Напоминания о приеме пищи
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Получайте напоминания о времени приема пищи
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                        <div>
                          <p className="font-medium">Напоминания о воде</p>
                          <p className="text-sm text-muted-foreground">
                            Получайте напоминания о питьевом режиме
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                        <div>
                          <p className="font-medium">Еженедельные отчеты</p>
                          <p className="text-sm text-muted-foreground">
                            Получайте еженедельные отчеты о прогрессе
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                        <div>
                          <p className="font-medium">Советы по питанию</p>
                          <p className="text-sm text-muted-foreground">
                            Получайте советы по здоровому питанию
                          </p>
                        </div>
                        <Switch />
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                      <Button className="w-full sm:w-auto">
                        Сохранить изменения
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
