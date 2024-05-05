import './App.css';
import PropertyList from "./components/PropertyList";
import Header from "./components/Header";
import GreetingsSection from "./components/GreetingsSection";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
    const myProperties = ["Квартира 1", "Квартира 2", "Дом 1", "Дом 2"];
    const testimonials = [
        {
          quote: "Очень доволен сотрудничеством с агентством. Быстро нашли идеальную квартиру для меня.",
          author: "Иван Иванов"
        },
        {
          quote: "Профессиональный и отзывчивый персонал. Рекомендую!",
          author: "Анна Смирнова"
        }
      ];

  return (
    <div>
        <Header />
        <GreetingsSection />
        <PropertyList properties={myProperties} />
        <Testimonials testimonials={testimonials} />
        <ContactForm />
        <Footer />
    </div>
  );
}

export default App;
