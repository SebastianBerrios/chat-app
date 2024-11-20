# Chat Real-Time Application

## Descripción

Este proyecto es una aplicación de chat en tiempo real construida con **React** y **TypeScript**, utilizando **WebSockets** para la comunicación entre el cliente y el servidor. Permite a los usuarios enviar y recibir mensajes de forma instantánea.

El backend de esta aplicación es proporcionado por un servicio WebSocket que maneja la transmisión de mensajes en tiempo real. El frontend es una interfaz sencilla que permite a los usuarios ingresar un nombre de usuario, enviar mensajes y ver los mensajes de otros usuarios en tiempo real.

## Tecnologías utilizadas

- **React**: Librería para la creación de interfaces de usuario.
- **TypeScript**: Un superconjunto de JavaScript que agrega tipado estático.
- **Tailwind CSS**: Para el diseño responsivo y estilizado de la interfaz de usuario.
- **WebSockets**: Para la comunicación en tiempo real entre el cliente y el servidor.
- **Jest** y **React Testing Library**: Para las pruebas unitarias de los componentes y hooks.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu máquina:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/)

## Clonar el proyecto

Para clonar este repositorio y usarlo, usa los siguientes comando en tu terminal:

```bash
git clone https://github.com/SebastianBerrios/chat-app
cd chat-app
npm install
npm run dev
```

## Clonar el backend

Este proyecto requiere de un servidor backend que maneje la comunicación WebSocket. Para ello, sigue estos pasos para clonar el backend:

```bash
git clone https://github.com/YaVendio/frontend-prueba.git
cd frontend-prueba
npm install
npm start
```

Esto abrirá la aplicación en tu navegador en http://localhost:3000.

## Uso

Al cargar la página, ingresa tu nombre de usuario en el campo correspondiente.
Una vez que te hayas registrado, podrás empezar a enviar mensajes en el chat.
Los mensajes enviados serán visibles para todos los usuarios conectados al chat en tiempo real.

## Pruebas

Este proyecto incluye pruebas unitarias para los componentes y hooks principales de la aplicación. Para ejecutar las pruebas, usa el siguiente comando:

```bash
npm test

```
