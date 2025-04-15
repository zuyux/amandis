# Amandis - Privacy-First Decentralized Dating App

Amandis is a decentralized dating app that leverages Nostr technology and zero-knowledge proofs (ZKP) to connect people without compromising their privacy. It's open-source and free for users, allowing everyone to control their keys and data.

## 🌟 Features

- **Self-Sovereign Identity**: Users control their keys and data
- **Zero-Knowledge Proofs**: Prove attributes like age or location without revealing actual data
- **Private Matching**: Filter potential matches by interests, age, or location without exposing sensitive details
- **Genuine Connections**: System encourages meaningful interactions and real-world meetings

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Privacy**: Nostr protocol and zero-knowledge proofs
- **Deployment**: Vercel

## 📁 Project Structure

```
amandis/
├── app/                  # Next.js App Router
│   ├── components/       # App-specific components
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Shared components
│   ├── ui/               # UI components from shadcn/ui
│   ├── features.tsx      # Features section
│   ├── footer.tsx        # Footer component
│   ├── hero.tsx          # Hero section
│   ├── how-it-works.tsx  # How it works section
│   ├── navbar.tsx        # Navigation bar
│   ├── privacy.tsx       # Privacy section
│   ├── testimonials.tsx  # Testimonials section
│   └── waitlist.tsx      # Waitlist form
├── lib/                  # Utility functions
├── public/               # Static assets
└── tailwind.config.js    # Tailwind configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/amandis.git
   cd amandis
```

2. Install dependencies:

```shellscript
npm install
# or
yarn install
```


3. Run the development server:

```shellscript
npm run dev
# or
yarn dev
```


4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.


## 🔒 Privacy Features

### Nostr Protocol

Amandis uses the Nostr (Notes and Other Stuff Transmitted by Relays) protocol, a simple, open protocol that enables global, decentralized, and censorship-resistant social media. This allows users to:

- Own their identity through cryptographic keys
- Control their data and decide what to share
- Connect with others without a central authority


### Zero-Knowledge Proofs

Zero-knowledge proofs allow users to prove statements about their data without revealing the data itself:

- Prove you're over 21 without revealing your exact age
- Verify you live within 10 miles without sharing your address
- Confirm shared interests without exposing your entire profile


## 🤝 Contributing

We welcome contributions to Amandis! Please see our [Contributing Guidelines](CONTRIBUTING.md) for more details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

- Website: [amandis.app](https://amandis.app)
- Twitter: [@amandisapp](https://twitter.com/amandisapp)
- GitHub: [github.com/amandis](https://github.com/amandis)


---

Built with ❤️ for privacy and genuine connections
```

```