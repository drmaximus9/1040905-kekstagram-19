'use strict';

var otherPictures = document.querySelector('.pictures');

var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

var USER_MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

var USER_NAMES = ['Васисуалий', 'Алехандро', 'Пипито', 'Джанго', 'Эркюль', 'Агата'];

var USER_FAMILIES = ['Пендерецкий', 'Ползункова', 'Рокфеллер', 'Лаггард', 'Клинтон', 'Гевара'];

var getRandElement = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

var getRandNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var getFullName = function () {
  var fullName = getRandElement(USER_NAMES) + ' ' + getRandElement(USER_FAMILIES);
  return fullName;
};

var USER_COMMENTS = [
  {
    avatar: 'img/avatar-' + getRandNumber(1, 6) + '.svg',
    message: getRandElement(USER_MESSAGES),
    name: getFullName()
  },
  {
    avatar: 'img/avatar-' + getRandNumber(1, 6) + '.svg',
    message: getRandElement(USER_MESSAGES),
    name: getFullName()
  },
  {
    avatar: 'img/avatar-' + getRandNumber(1, 6) + '.svg',
    message: getRandElement(USER_MESSAGES),
    name: getFullName()
  },
  {
    avatar: 'img/avatar-' + getRandNumber(1, 6) + '.svg',
    message: getRandElement(USER_MESSAGES),
    name: getFullName()
  },
  {
    avatar: 'img/avatar-' + getRandNumber(1, 6) + '.svg',
    message: getRandElement(USER_MESSAGES),
    name: getFullName()
  },
  {
    avatar: 'img/avatar-' + getRandNumber(1, 6) + '.svg',
    message: getRandElement(USER_MESSAGES),
    name: getFullName()
  }
];


var userPhotos = [
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
  {
    url: 'photos/' + getRandNumber(1, 25) + '.jpg' ,
    description: '',
    likes: getRandNumber(15, 200),
    comments: getRandElement(USER_COMMENTS)
  },
];

var renderPicture = function (picture) {
  var pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;

  return pictureElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < userPhotos.length; i++) {
  fragment.appendChild(renderPicture(userPhotos[i]));
}

otherPictures.appendChild(fragment);

