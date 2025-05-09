"use client";

import type React from "react";

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { useState } from "react";
import { IconCalendar, IconPlus, IconTrash } from "@tabler/icons-react";

export default function CreateReportPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [meals, setMeals] = useState([
    {
      id: 1,
      type: "Завтрак",
      description: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
    },
  ]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [mood, setMood] = useState("Хорошее");
  const [notes, setNotes] = useState("");
  const [water, setWater] = useState("2000");

  // Добавить новый прием пищи
  const addMeal = () => {
    const newId =
      meals.length > 0 ? Math.max(...meals.map((meal) => meal.id)) + 1 : 1;
    setMeals([
      ...meals,
      {
        id: newId,
        type: "Перекус",
        description: "",
        calories: "",
        protein: "",
        carbs: "",
        fat: "",
      },
    ]);
  };

  // Удалить прием пищи
  const removeMeal = (id: number) => {
    if (meals.length > 1) {
      setMeals(meals.filter((meal) => meal.id !== id));
    }
  };

  // Обновить данные приема пищи
  const updateMeal = (id: number, field: string, value: string) => {
    setMeals(
      meals.map((meal) => {
        if (meal.id === id) {
          return { ...meal, [field]: value };
        }
        return meal;
      }),
    );
  };

  // Рассчитать общие значения
  const totals = meals.reduce(
    (acc, meal) => {
      acc.calories += Number(meal.calories) || 0;
      acc.protein += Number(meal.protein) || 0;
      acc.carbs += Number(meal.carbs) || 0;
      acc.fat += Number(meal.fat) || 0;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 },
  );

  // Обработка отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика сохранения отчета
    console.log({
      date: format(selectedDate, "yyyy-MM-dd"),
      meals,
      totals,
      mood,
      notes,
      water,
    });
    // После сохранения можно перенаправить на страницу отчетов
  };

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                <h1 className="text-xl sm:text-2xl font-bold">
                  Написать отчет
                </h1>
                <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto justify-start sm:justify-center"
                    >
                      <IconCalendar className="mr-2 h-4 w-4" />
                      <span className="truncate">
                        {format(selectedDate, "d MMMM yyyy", { locale: ru })}
                      </span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="end">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        if (date) {
                          setSelectedDate(date);
                          setIsCalendarOpen(false);
                        }
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Tabs defaultValue="meals" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
                    <TabsTrigger value="meals">Приемы пищи</TabsTrigger>
                    <TabsTrigger value="summary">Итоги дня</TabsTrigger>
                    <TabsTrigger value="water">Вода</TabsTrigger>
                    <TabsTrigger value="notes">Заметки</TabsTrigger>
                  </TabsList>

                  <TabsContent value="meals" className="space-y-4 mt-4">
                    {meals.map((meal, index) => (
                      <Card key={meal.id}>
                        <CardHeader className="pb-3">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                            <div className="flex-1">
                              <CardTitle className="text-base">
                                Прием пищи {index + 1}
                              </CardTitle>
                              <CardDescription>
                                Запишите, что вы ели
                              </CardDescription>
                            </div>
                            <div className="flex items-center gap-2">
                              <Select
                                value={meal.type}
                                onValueChange={(value) =>
                                  updateMeal(meal.id, "type", value)
                                }
                              >
                                <SelectTrigger className="w-[140px]">
                                  <SelectValue placeholder="Тип приема пищи" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Завтрак">
                                    Завтрак
                                  </SelectItem>
                                  <SelectItem value="Обед">Обед</SelectItem>
                                  <SelectItem value="Ужин">Ужин</SelectItem>
                                  <SelectItem value="Перекус">
                                    Перекус
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              {meals.length > 1 && (
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeMeal(meal.id)}
                                >
                                  <IconTrash className="h-4 w-4" />
                                  <span className="sr-only">Удалить</span>
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor={`meal-${meal.id}-description`}>
                              Описание
                            </Label>
                            <Textarea
                              id={`meal-${meal.id}-description`}
                              placeholder="Опишите, что вы ели"
                              value={meal.description}
                              onChange={(e) =>
                                updateMeal(
                                  meal.id,
                                  "description",
                                  e.target.value,
                                )
                              }
                            />
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor={`meal-${meal.id}-calories`}>
                                Калории (ккал)
                              </Label>
                              <Input
                                id={`meal-${meal.id}-calories`}
                                type="number"
                                placeholder="ккал"
                                value={meal.calories}
                                onChange={(e) =>
                                  updateMeal(
                                    meal.id,
                                    "calories",
                                    e.target.value,
                                  )
                                }
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`meal-${meal.id}-protein`}>
                                Белки (г)
                              </Label>
                              <Input
                                id={`meal-${meal.id}-protein`}
                                type="number"
                                placeholder="г"
                                value={meal.protein}
                                onChange={(e) =>
                                  updateMeal(meal.id, "protein", e.target.value)
                                }
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`meal-${meal.id}-carbs`}>
                                Углеводы (г)
                              </Label>
                              <Input
                                id={`meal-${meal.id}-carbs`}
                                type="number"
                                placeholder="г"
                                value={meal.carbs}
                                onChange={(e) =>
                                  updateMeal(meal.id, "carbs", e.target.value)
                                }
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`meal-${meal.id}-fat`}>
                                Жиры (г)
                              </Label>
                              <Input
                                id={`meal-${meal.id}-fat`}
                                type="number"
                                placeholder="г"
                                value={meal.fat}
                                onChange={(e) =>
                                  updateMeal(meal.id, "fat", e.target.value)
                                }
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={addMeal}
                    >
                      <IconPlus className="mr-2 h-4 w-4" />
                      Добавить прием пищи
                    </Button>
                  </TabsContent>

                  <TabsContent value="summary" className="space-y-4 mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Итоги дня</CardTitle>
                        <CardDescription>
                          Общие показатели питания за день
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                          <div className="space-y-2">
                            <Label>Калории</Label>
                            <div className="text-2xl font-bold">
                              {totals.calories} ккал
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Дневная цель: 2000 ккал
                            </p>
                          </div>
                          <div className="space-y-2">
                            <Label>Белки</Label>
                            <div className="text-2xl font-bold">
                              {totals.protein} г
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Дневная цель: 100 г
                            </p>
                          </div>
                          <div className="space-y-2">
                            <Label>Углеводы</Label>
                            <div className="text-2xl font-bold">
                              {totals.carbs} г
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Дневная цель: 250 г
                            </p>
                          </div>
                          <div className="space-y-2">
                            <Label>Жиры</Label>
                            <div className="text-2xl font-bold">
                              {totals.fat} г
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Дневная цель: 65 г
                            </p>
                          </div>
                        </div>

                        <Separator />

                        <div className="space-y-2">
                          <Label htmlFor="mood">Настроение</Label>
                          <Select value={mood} onValueChange={setMood}>
                            <SelectTrigger id="mood">
                              <SelectValue placeholder="Выберите настроение" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Отличное">Отличное</SelectItem>
                              <SelectItem value="Хорошее">Хорошее</SelectItem>
                              <SelectItem value="Нормальное">
                                Нормальное
                              </SelectItem>
                              <SelectItem value="Плохое">Плохое</SelectItem>
                              <SelectItem value="Ужасное">Ужасное</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="water" className="space-y-4 mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Потребление воды</CardTitle>
                        <CardDescription>
                          Сколько воды вы выпили за день
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="water">Количество воды (мл)</Label>
                          <Input
                            id="water"
                            type="number"
                            placeholder="мл"
                            value={water}
                            onChange={(e) => setWater(e.target.value)}
                          />
                          <p className="text-xs text-muted-foreground">
                            Рекомендуемая норма: 2000-2500 мл в день
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="notes" className="space-y-4 mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Заметки</CardTitle>
                        <CardDescription>
                          Дополнительные заметки о вашем дне
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="notes">Заметки</Label>
                          <Textarea
                            id="notes"
                            placeholder="Запишите свои мысли, ощущения или наблюдения за день"
                            className="min-h-[150px]"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    Отмена
                  </Button>
                  <Button type="submit" className="w-full sm:w-auto">
                    Сохранить отчет
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
