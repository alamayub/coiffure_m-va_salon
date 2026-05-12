import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, User, Sparkles } from 'lucide-react';
import { createChat } from '../services/geminiService';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Welcome to Coiffure Méva. How can I assist you with your beauty journey today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    if (isOpen && !chatRef.current) {
      chatRef.current = createChat();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      if (!chatRef.current) {
        chatRef.current = createChat();
      }
      
      const result = await chatRef.current.sendMessage({ message: userMessage });
      const responseText = result.text;
      
      setMessages(prev => [...prev, { role: 'model', text: responseText || "I'm sorry, I couldn't process that. Please try again." }]);
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, { role: 'model', text: "Forgive me, but I'm experiencing some technical difficulties. Please feel free to call us at +352 26 20 34 62." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white shadow-2xl rounded-sm flex flex-col overflow-hidden border border-beige"
          >
            {/* Header */}
            <div className="bg-luxury-black p-6 text-white flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-lg leading-none">Méva Assistant</h3>
                  <span className="text-[10px] uppercase tracking-widest text-gold opacity-80">Personal Concierge</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-gold transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 bg-beige/10"
            >
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    msg.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div className={cn(
                    "p-4 text-sm leading-relaxed",
                    msg.role === 'user' 
                      ? "bg-gold text-white rounded-l-lg rounded-tr-lg" 
                      : "bg-white border border-beige text-luxury-black/80 rounded-r-lg rounded-tl-lg"
                  )}>
                    {msg.text}
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-luxury-black/30 mt-2 font-medium">
                    {msg.role === 'user' ? 'You' : 'Méva AI'}
                  </span>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex space-x-2 p-4 bg-white/50 rounded-r-lg rounded-tl-lg border border-beige w-16">
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }} className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-1.5 h-1.5 bg-gold rounded-full" />
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-beige">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="How can we help?"
                  className="flex-1 bg-beige/30 p-3 text-sm focus:outline-none focus:bg-beige/50 transition-colors"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="bg-luxury-black text-white p-3 hover:bg-gold transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-luxury-black rounded-full shadow-2xl flex items-center justify-center text-white border border-gold/30 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        <div className="relative z-10">
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </div>
      </motion.button>
    </div>
  );
};
