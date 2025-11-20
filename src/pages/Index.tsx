import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [copiedIP, setCopiedIP] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIP(true);
    toast({
      title: 'Скопировано! ✓',
      description: 'IP адрес скопирован в буфер обмена',
      duration: 2000,
    });
    setTimeout(() => setCopiedIP(false), 2000);
  };

  const mods = [
    {
      icon: 'Cog',
      name: 'Create',
      description: 'Строй механизмы, что двигают остров',
    },
    {
      icon: 'Mic',
      name: 'Voice Chat',
      description: 'Говори, смейся и договаривайся прямо в игре',
    },
    {
      icon: 'Camera',
      name: 'Веб-камеры',
      description: 'Ты видишь, кто рядом. Реально видишь',
    },
    {
      icon: 'Waves',
      name: 'Новый океан',
      description: 'Глубже, темнее, опаснее',
    },
  ];

  const socials = [
    {
      icon: 'Twitch',
      name: 'Twitch',
      description: 'Прямые трансляции',
      url: 'https://www.twitch.tv/gedzimate',
      color: 'hover:border-purple-500',
      emoji: '🔴',
    },
    {
      icon: 'Video',
      name: 'TikTok',
      description: 'Короткие видео',
      url: 'https://www.tiktok.com/@godzillich_off',
      color: 'hover:border-pink-500',
      emoji: '📱',
    },
    {
      icon: 'Youtube',
      name: 'YouTube',
      description: 'Видео и стримы',
      url: 'https://youtube.com/@godzillich',
      color: 'hover:border-red-500',
      emoji: '📺',
    },
    {
      icon: 'Send',
      name: 'Telegram',
      description: 'Новости и анонсы',
      url: 'https://t.me/empiregodzill',
      color: 'hover:border-blue-500',
      emoji: '📨',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-primary overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-black to-black pointer-events-none"></div>
      
      <div className="relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="text-center space-y-6 animate-slide-up">
            <div className="inline-block mb-4">
              <div className="text-6xl md:text-8xl font-bold neon-glow tracking-wider">
                GEDZI VERSE
              </div>
              <div className="text-sm md:text-base text-muted-foreground mt-2 tracking-[0.3em]">
                MINECRAFT 1.21.8
              </div>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              🌍 Это не просто сервер. Это эксперимент.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <div className="group cursor-pointer" onClick={() => copyToClipboard('Gedziverse.minerent.io')}>
                  <div className="flex items-center gap-3 px-6 py-3 border border-primary/30 rounded bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-card neon-border">
                    <Icon name="Server" className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground">Главный IP</div>
                      <div className="font-mono text-lg">Gedziverse.minerent.io</div>
                    </div>
                    <Icon name={copiedIP ? "Check" : "Copy"} className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100" />
                  </div>
                </div>
              </div>

              <div className="text-sm text-muted-foreground">
                Альтернатива: <span className="text-primary font-mono">odyssey.minerent.net:25614</span>
              </div>
            </div>

            <div className="mt-12">
              <a href="https://gedziverse.easydonate.ru/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-xl px-12 py-8 font-bold tracking-wider animate-glow-pulse bg-primary hover:bg-primary/90 text-black">
                  <Icon name="ShoppingCart" className="w-6 h-6 mr-3" />
                  МАГАЗИН СЕРВЕРА
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 neon-glow">
              ЧТО ЭТО?
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Представь: ты спавнишься на огромном острове посреди обновлённого океана.
                Внизу — древние данжи, над тобой — камеры, фиксирующие каждый момент,
                а рядом — живые голоса других игроков.
              </p>
              <p>
                Это не совсем ванила. Это смесь Фриклэнда и Майншилда,
                где истории рождаются из случайных встреч,
                где можно быть фриком, инженером, торговцем — кем угодно.
              </p>
              <p className="text-primary font-semibold">
                Здесь нет сценария. Есть только люди, хаос и твоя история.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-black via-secondary/5 to-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 neon-glow">
              ⚙️ МОДЫ
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mods.map((mod, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center pulse-neon">
                      <Icon name={mod.icon as any} className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{mod.name}</h3>
                      <p className="text-sm text-muted-foreground">{mod.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 neon-glow">
              СВЯЗЬ С НАМИ
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className={`p-6 bg-card/50 backdrop-blur-sm border-primary/30 transition-all duration-300 hover:scale-105 hover:bg-card ${social.color}`}>
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="text-4xl">{social.emoji}</div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">{social.name}</h3>
                        <p className="text-sm text-muted-foreground">{social.description}</p>
                      </div>
                      <Icon name="ExternalLink" className="w-4 h-4 text-primary/50" />
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 border-t border-primary/20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="Circle" className="w-2 h-2 text-primary animate-pulse" />
              <span className="text-primary font-semibold">СТАТУС: АКТИВНЫЙ</span>
            </div>
            <div className="mt-4 text-xs text-muted-foreground tracking-wider">
              GEDZI VERSE © 2025 · MINECRAFT SERVER
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}
