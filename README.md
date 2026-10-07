# MediConnect
Next.js 14 (App Router) + TypeScript + Tailwind demo telemedicine app with fictional data.
    npm install && npm run dev   # http://localhost:3000
Routes: / · /login · /register · /doctors · /doctors/[id] · /book/[id] · /patient · /doctor · /admin · /consult · /messages · /prescriptions/new
AI assistant: UI in components/Chatbot.tsx, client call in lib/chat.ts, replace the mock logic in app/api/chat/route.ts with your AI provider.
Demo only: auth, payments, video and storage are simulated. Not for real medical use.
