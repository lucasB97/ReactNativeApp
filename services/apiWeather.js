import axios from 'axios';

export const consultarClima = async (cidade) => {
    const url = `https://goweather.herokuapp.com/weather/${cidade}`;

    const res = await axios.get(url);

    let foreCast = [];

    for (const key in res.data.forecast) {
        foreCast = res.data.forecast[key];   
    }

    const tempo = {
        temperatura: res.data.temperature,
        vento: res.data.wind,
        descricao: res.data.description,
        forecast: foreCast       
    };

    return tempo;
};