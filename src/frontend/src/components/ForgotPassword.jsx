import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Correo enviado a:", email);
    // Aquí podrías llamar a tu API para enviar el enlace de recuperación
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white w-full max-w-sm rounded-3xl shadow-lg p-6 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="/burger-logo.png" // coloca aquí la ruta de tu imagen
            alt="Burger House Logo"
            className="w-20 h-20"
          />
        </div>

        {/* Título */}
        <h1 className="text-2xl font-bold text-gray-800 mb-1">BURGER HOUSE</h1>

        {/* Subtítulo */}
        <p className="text-sm text-gray-600 mb-4">
          ¿Olvidaste tu contraseña de House Burger?
        </p>

        {/* Instrucción */}
        <p className="text-sm text-gray-700 mb-6">
          Por favor introduzca su dirección de correo electrónico para recibir
          un enlace de restablecimiento de contraseña.
        </p>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Correo electrónico"
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          {/* Botones */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              className="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              type="submit"
              className="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
