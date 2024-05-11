import '../App.css'

export default function Footer() {
  return (
    <footer className="Footer">
      <p>© {new Date().getFullYear()} URL Shortener</p>
    </footer>
  );
}