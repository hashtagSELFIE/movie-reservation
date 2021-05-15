import Seats from "../models/Seats.js";
import Showtime from "../models/Showtime.js";
import Movies from "../models/Movies.js";
import News from "../models/News.js";
import Cinema from "../models/Cinema.js";

export const SEATS = [
  new Seats(0, "1A", "available", 160),
  new Seats(1, "2A", "available", 160),
  new Seats(2, "3A", "available", 160),
  new Seats(3, "4A", "available", 160),
  new Seats(4, "1B", "unavailable", 160),
  new Seats(5, "2B", "available", 160),
  new Seats(6, "3B", "available", 160),
  new Seats(7, "4B", "available", 160),
  new Seats(8, "1C", "available", 160),
  new Seats(9, "2C", "available", 160),
  new Seats(10, "3C", "available", 160),
  new Seats(11, "4C", "unavailable", 160),
  new Seats(12, "1D", "available", 160),
  new Seats(13, "2D", "available", 160),
  new Seats(14, "3D", "unavailable", 160),
  new Seats(15, "4D", "available", 160),
];

export const SHOWTIMES = [
  new Showtime(0, 113, "10/5/2021", ["11:34 PM", "7:45 PM"]),
  new Showtime(1, 147, "11/5/2021", ["11:34 PM", "7:45 PM"]),
  new Showtime(2, 121, "12/5/2021", ["11:34 PM", "7:45 PM"]),
  new Showtime(3, 120, "13/5/2021", ["11:34 PM", "7:45 PM"]),
];

export const MOVIES = [
  new Movies(
    0,
    "Raya and the last dragon",
    "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. However, when sinister monsters known as the Druun threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, those same monsters have returned, and it's up to a lone warrior to track down the last dragon and stop the Druun for good.",
    "Animation",
    157,
    "G",
    "10/5/2021",
    "31/5/2021",
    "https://www.youtube.com/watch?v=1VIZ89FEjYI&t=1s",
    "https://m.media-amazon.com/images/M/MV5BZWNiOTc4NGItNGY4YS00ZGNkLThkOWEtMDE2ODcxODEwNjkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
  ),
  new Movies(
    1,
    "Judas and the Black Messiah",
    "Offered a plea deal by the FBI, William O'Neal infiltrates the Illinois chapter of the Black Panther Party to gather intelligence on Chairman Fred Hampton.",
    "Drama",
    126,
    "15+",
    "10/5/2021",
    "31/5/2021",
    "https://www.youtube.com/watch?v=L5Ui8P26wa4",
    "https://www.housesamyan.com/assets/uploads/movie/poster_web_path/20210417180021_CA1E58C2-2129-4437-A4F3-46CB8DB48EB0.jpeg"
  ),
  new Movies(
    2,
    "detective conan the scarlet alibi",
    "Compilation film combining footage from various television anime episodes that center on the Akai family.",
    "Animation",
    95,
    "13",
    "10/5/2021",
    "31/5/2021",
    "https://youtu.be/IITYtO3_Wes",
    "https://lh3.googleusercontent.com/9oY0cgfTF-mqNNBcAlaXbv__k1Lg8-BujOZt1Rp17o4kkHq0Z8kfrr7HaUe0-R_nC8rOECM7H5nE6stoHdBQrISEOpBJaxFIGao=w260"
  ),
  new Movies(
    3,
    "promising young woman",
    "Nothing in Cassie's life is what it appears to be -- she's wickedly smart, tantalizingly cunning, and she's living a secret double life by night. Now, an unexpected encounter is about to give Cassie a chance to right the wrongs from the past.",
    "Crime",
    115,
    "18",
    "10/5/2021",
    "31/5/2021",
    "https://www.youtube.com/watch?v=l-yi5eS64x8&t=12s",
    "https://www.housesamyan.com/assets/uploads/movie/poster_web_path/20210417180134_14AB6424-5F56-4208-8C5F-B593C77081FE.jpeg"
  ),
  new Movies(
    4,
    "Godzilla vs. Kong",
    "Kong and his protectors undertake a perilous journey to find his true home. Along for the ride is Jia, an orphaned girl who has a unique and powerful bond with the mighty beast. However, they soon find themselves in the path of an enraged Godzilla as he cuts a swath of destruction across the globe. The initial confrontation between the two titans -- instigated by unseen forces -- is only the beginning of the mystery that lies deep within the core of the planet.",
    "Action",
    115,
    "G",
    "10/5/2021",
    "31/5/2021",
    "https://www.youtube.com/watch?v=A6E_ijAMnPI",
    "https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY1200_CR90,0,630,1200_AL_.jpg"
  ),
  new Movies(
    5,
    "Nobody",
    "Hutch Mansell fails to defend himself or his family when two thieves break into his suburban home one night. The aftermath of the incident soon strikes a match to his long-simmering rage. In a barrage of fists, gunfire and squealing tires, Hutch must now save his wife and son from a dangerous adversary -- and ensure that he will never be underestimated again.",
    "Action",
    95,
    "18",
    "10/5/2021",
    "31/5/2021",
    "https://www.youtube.com/watch?v=s-7l9B8CwnM",
    "https://m.media-amazon.com/images/M/MV5BMjM5YTRlZmUtZGVmYi00ZjE2LWIyNzAtOWVhMDk1MDdkYzhjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UY1200_CR64,0,630,1200_AL_.jpg"
  ),
];

export const NEWS = [
  new News(
    0,
    "Promotions",
    "Western Water Hemp",
    "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "10/6/2020"
  ),
  new News(
    1,
    "NEWS",
    "KALI BROMATUM",
    "https://images.unsplash.com/photo-1554068292-ce72e2521c9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "10/6/2020"
  ),
  new News(
    2,
    "Promotions",
    "acebutolol hydrochloride",
    "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "10/6/2020"
  ),
  new News(
    3,
    "NEWS",
    "Fluconazole",
    "https://images.unsplash.com/photo-1554068292-ce72e2521c9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "10/6/2020"
  ),
];

export const CINEMA = [
  new Cinema(0, "Dottie", 1, "Moncton", 16),
  new Cinema(1, "Rusk", 2, "Kanáli", 16),
  new Cinema(2, "School", 3, "Otacílio Costa", 16),
  new Cinema(3, "Novick", 4, "Martingança-Gare", 16),
  new Cinema(4, "Hauk", 5, "Bukonyo", 16),
];
