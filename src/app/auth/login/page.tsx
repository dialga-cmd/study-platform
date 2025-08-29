"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { account } from "@/lib/appwrite";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Always try to delete the current session first
      await account.deleteSession('current');
    } catch (_err) {
      // Ignore error if no session exists
    }
    try {
      await account.createEmailPasswordSession(email, password);
      setMessage("✅ Logged in successfully!");
      router.push("/your-target-page"); // e.g., "/dashboard"
    } catch (error: any) {
      setMessage("❌ " + error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      <form
        onSubmit={handleLogin}
        className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 w-96"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Welcome Back
        </h2>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition"
        >
          Log In
        </button>

        {message && (
          <p className="mt-4 text-center text-sm text-cyan-300">{message}</p>
        )}
      </form>
    </div>
  );
}