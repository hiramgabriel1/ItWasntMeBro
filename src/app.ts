// index.js
import venom from "venom-bot";

// @ts-ignore
venom.create({
		session: "session-name", // Nombre de la sesión
		multidevice: true, // Soporte para múltiples dispositivos
		headless: true, // Ejecutar en modo headless (sin interfaz gráfica)
		// Puedes agregar más opciones según la documentación
	})
	.then((client: any) => start(client))
	.catch((error: Error) => {
		console.log(error);
	});

// Función para manejar la lógica del bot
function start(client: any) {
	console.log("¡El bot está listo!");

	client.onMessage((message: any) => {
		console.log(`Mensaje recibido de ${message.from}: ${message.body}`);

		if (message.body.toLowerCase() === "hola") {
			client
				.sendText(message.from, "¡Hola! ¿Cómo puedo ayudarte hoy?")
				.then((result: string) => {
					console.log("Mensaje enviado:", result);
				})
				.catch((error: Error) => {
					console.error("Error al enviar mensaje:", error);
				});
		}

		// Manejar comandos personalizados
		if (message.body.startsWith("!comando")) {
			const args = message.body.split(" ");
			const comando = args[1];

			switch (comando) {
				case "ayuda":
					client
						.sendText(
							message.from,
							"Lista de comandos disponibles:\n!comando ayuda - Muestra esta ayuda\n!comando saludo - Envía un saludo"
						)
						.catch((error: Error) => console.error(error));
					break;
				case "saludo":
					client
						.sendText(message.from, "¡Hola! ¿Cómo estás?")
						.catch((error: Error) => console.error(error));
					break;
				default:
					client
						.sendText(
							message.from,
							"Comando no reconocido. Escribe !comando ayuda para ver los comandos disponibles."
						)
						.catch((error: Error) => console.error(error));
			}
		}
	});
}
