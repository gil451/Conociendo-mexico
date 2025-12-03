import { BiMap, BiStar } from "react-icons/bi";
import "./hoteles.css";

const hotelesData = [
    {
        id: 1,
        nombre: "Hotel Casa Azul",
        ubicacion: "San Cristóbal de las Casas",
        precio: 950,
        rating: 4.8,
        imagen: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
    },
    {
        id: 2,
        nombre: "Hotel Paraíso Chiapaneco",
        ubicacion: "Tuxtla Gutiérrez",
        precio: 780,
        rating: 4.5,
        imagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
    },
    {
        id: 3,
        nombre: "EcoHotel Monte Verde",
        ubicacion: "Palenque",
        precio: 1200,
        rating: 4.9,
        imagen: "https://images.unsplash.com/photo-1590496793925-5a6a8b24017e"
    },
];

export default function Hoteles() {
    return (
        <div className="hoteles-body">
            <div className="hoteles-container">

                <h1 className="hoteles-title">Hoteles recomendados</h1>

                <p className="hoteles-sub">
                    Encuentra hospedajes cómodos, seguros y rodeados de la belleza natural de Chiapas.
                    Desde cabañas ecológicas hasta hoteles boutique, hay una opción perfecta para ti.
                </p>

                <div className="hoteles-grid">
                    {hotelesData.map((hotel) => (
                        <div key={hotel.id} className="hotel-card">
                            <img src={hotel.imagen} className="hotel-img" />

                            <div className="hotel-info">
                                <h3>{hotel.nombre}</h3>

                                <p className="hotel-location">
                                    <BiMap /> {hotel.ubicacion}
                                </p>

                                <div className="hotel-details">
                                    <span className="hotel-price">${hotel.precio} / noche</span>
                                    <span className="hotel-rating">
                                        <BiStar /> {hotel.rating}
                                    </span>
                                </div>

                                <button className="hotel-btn">Ver más</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

