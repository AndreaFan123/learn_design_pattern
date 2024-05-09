type UserResponse = {
  results: User[];
  info: UserInfo;
};

type User = {
  gender: string;
  name: UserName;
  location: UserLocation;
  email: string;
  login: UserLogin;
  dob: UserDob;
  registered: UserRegistered;
  phone: string;
  cell: string;
  id: UserId;
  picture: UserPicture;
  nat: string;
};

type UserName = {
  title: string;
  first: string;
  last: string;
};

type UserLocation = {
  street: UserStreet;
  city: string;
  state: string;
  country: string;
  postcode: number | string;
  coordinates: UserCoordinates;
  timezone: UserTimezone;
};

type UserStreet = {
  number: number;
  name: string;
};

type UserCoordinates = {
  latitude: string;
  longitude: string;
};

type UserTimezone = {
  offset: string;
  description: string;
};

type UserLogin = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};

type UserDob = {
  date: string;
  age: number;
};

type UserRegistered = {
  date: string;
  age: number;
};

type UserId = {
  name: string;
  value: string | null;
};

type UserPicture = {
  large: string;
  medium: string;
  thumbnail: string;
};

type UserInfo = {
  seed: string;
  results: number;
  page: number;
  version: string;
};

export type {
  UserResponse,
  User,
  UserName,
  UserLocation,
  UserStreet,
  UserCoordinates,
  UserTimezone,
  UserLogin,
  UserDob,
  UserRegistered,
  UserId,
  UserPicture,
  UserInfo,
};
