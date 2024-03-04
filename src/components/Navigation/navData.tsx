interface MenuItem {
  title: string;
  link?: string;
  submenu?: MenuItem[];
}

export const generateNavLinks = (): MenuItem[] => {
  return [
    { title: "Головна", link: "/" },
    {
      title: "Послуги",
      submenu: [
        { title: "Для виконавців" },
        {
          title: "Для студентів",
          submenu: [
            { title: "Замовити індивідуальну роботу" },
            { title: "Купити готову роботу" },
            { title: "Консультаційна підтримка" },
          ],
        },
      ],
    },
    { title: "Акції", link: "/promotions" },
    { title: "Контакти", link: "/contacts" },
  ];
};
