export const reportData = [
  {
    id: 1,
    time: '11:00',
    media: 'video',
    source: 'https://www.youtube.com/watch?v=AbCDEFGHiJk',
    text: 'Официальное открытие фестиваля "День города"',
  },
  {
    id: 2,
    time: '11:30',
    media: 'photo',
    source: 'https://i.imgur.com/XiixQ2D.jpg',
    text: 'Конкурс красоты "Мисс Ставрополь-2022"',
  },
  {
    id: 3,
    time: '12:00',
    media: 'video',
    source: 'https://www.youtube.com/watch?v=AbCDEFGHiJk',
    text: 'Выступление местной творческой группы "Новый день"',
  },
  {
    id: 4,
    time: '13:00',
    media: 'photo',
    source: 'https://i.imgur.com/tvj1RcG.jpg',
    text: 'Мастер-класс по приготовлению традиционных ставропольских блюд',
  },
  {
    id: 5,
    time: '14:00',
    media: 'video',
    source: 'https://www.youtube.com/watch?v=AbCDEFGHiJk',
    text: 'Выступление танцевального ансамбля "Вертикаль"',
  },
  {
    id: 6,
    time: '14:30',
    media: 'photo',
    source: 'https://i.imgur.com/tJf9M7V.jpg',
    text: 'Квест "Ставрополь в исторических фотографиях"',
  },
  {
    id: 7,
    time: '15:00',
    media: 'video',
    source: 'https://www.youtube.com/watch?v=AbCDEFGHiJk',
    text: 'Концертный номер от участников шоу-балета "Миллион мелочей"',
  },
  {
    id: 8,
    time: '16:00',
    media: 'photo',
    source: 'https://i.imgur.com/bF3qyTy.jpg',
    text: 'Презентация нового театрального спектакля "Последний бой"',
  },
  {
    id: 9,
    time: '17:00',
    media: 'video',
    source: 'https://www.youtube.com/watch?v=AbCDEFGHiJk',
    text: 'Закрытие фестиваля и фейерверк',
  },
] as const;

export type ReportItem = (typeof reportData)[number];
