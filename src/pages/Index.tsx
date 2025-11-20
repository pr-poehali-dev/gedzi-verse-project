import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [copiedIP, setCopiedIP] = useState(false);
  const [onlinePlayers, setOnlinePlayers] = useState(20);

  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.innerHTML = '❄';
      snowflake.style.left = Math.random() * 100 + '%';
      snowflake.style.animationDuration = Math.random() * 3 + 8 + 's';
      snowflake.style.opacity = (Math.random() * 0.6 + 0.4).toString();
      snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
      document.body.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 12000);
    };

    const interval = setInterval(createSnowflake, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlinePlayers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newValue = prev + change;
        return Math.max(15, Math.min(25, newValue));
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIP(true);
    toast({
      title: 'Скопировано',
      description: 'IP адрес скопирован в буфер обмена',
      duration: 2000,
    });
    setTimeout(() => setCopiedIP(false), 2000);
  };

  const features = [
    {
      icon: 'Snowflake',
      name: 'Зимняя атмосфера',
      description: 'Вечная зима с падающим снегом и праздничными подарками',
    },
    {
      icon: 'Users',
      name: 'Выбор расы',
      description: 'Выбирай своё происхождение и получай уникальные способности',
    },
    {
      icon: 'Mic',
      name: 'Голосовой чат',
      description: 'Simple Voice Chat для живого общения с игроками',
    },
    {
      icon: 'Heart',
      name: 'Честное выживание',
      description: 'Без телепортов, читов и донатных преимуществ',
    },
  ];

  const roles = [
    {
      icon: 'User',
      name: 'Игрок',
      description: 'Чистая ваниль без ограничений',
      color: 'border-gray-500',
    },
    {
      icon: 'Sparkles',
      name: 'Игрок++',
      description: 'Косметика и визуальные бонусы для активных',
      color: 'border-blue-400',
    },
    {
      icon: 'Crown',
      name: 'Премиум',
      description: 'Поддержка проекта. Эксклюзивная косметика',
      color: 'border-yellow-400',
    },
  ];

  const socials = [
    {
      name: 'Twitch',
      description: 'Прямые трансляции',
      url: 'https://www.twitch.tv/gedzimate',
      color: 'hover:border-purple-500',
      icon: 'Video',
    },
    {
      name: 'TikTok',
      description: 'Короткие видео',
      url: 'https://www.tiktok.com/@godzillich_off',
      color: 'hover:border-pink-500',
      icon: 'Music',
    },
    {
      name: 'YouTube',
      description: 'Видео и стримы',
      url: 'https://youtube.com/@godzillich',
      color: 'hover:border-red-500',
      icon: 'Youtube',
    },
    {
      name: 'Telegram',
      description: 'Новости и анонсы',
      url: 'https://t.me/empiregodzill',
      color: 'hover:border-blue-400',
      icon: 'Send',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background pointer-events-none"></div>
      
      <div className="relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
          <div 
            className="absolute inset-0 opacity-30" 
            style={{
              backgroundImage: 'url(https://cdn.poehali.dev/files/1d25f983-ecdd-4bc2-95dd-b83e4228106b.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(8px)',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
          
          <div className="relative z-10 text-center space-y-8 animate-slide-up max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full text-sm animate-pulse-winter">
              <Icon name="Activity" className="w-4 h-4 text-green-400" />
              <span className="text-primary font-semibold">Статус: Онлайн</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-foreground font-mono">{onlinePlayers} игроков</span>
            </div>

            <div className="inline-block mb-6">
              <div className="text-5xl md:text-7xl font-bold winter-glow tracking-wider mb-2">
                GEDZIVERSE
              </div>
              <div className="text-lg md:text-xl text-muted-foreground tracking-wide">
                Приватный атмосферный сервер · Minecraft 1.21.8
              </div>
            </div>

            <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed font-light">
              Уютный сервер для честного выживания без донатной помойки и дисбаланса
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <div className="group cursor-pointer" onClick={() => copyToClipboard('Gedziverse.minerent.io')}>
                  <div className="flex items-center gap-3 px-6 py-4 border border-primary/30 rounded-lg bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-card frost-border">
                    <Icon name="Server" className="w-5 h-5 text-primary" />
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground">Главный IP</div>
                      <div className="font-mono text-lg text-foreground">Gedziverse.minerent.io</div>
                    </div>
                    <Icon name={copiedIP ? "Check" : "Copy"} className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 text-primary" />
                  </div>
                </div>
              </div>

              <div className="text-sm text-muted-foreground">
                Альтернатива: <span className="text-primary font-mono">odyssey.minerent.net:25614</span>
              </div>
            </div>

            <div className="mt-12">
              <a href="https://gedziverse.easydonate.ru/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-xl px-12 py-6 font-bold tracking-wide animate-glow-pulse bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:scale-105 transition-transform">
                  <Icon name="ShoppingBag" className="w-6 h-6 mr-3" />
                  Магазин сервера
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-background via-card/20 to-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 winter-glow">
                Философия сервера
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Место, где важна атмосфера, а не количество игроков
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center pulse-winter">
                      <Icon name={feature.icon as any} className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{feature.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 max-w-3xl mx-auto">
              <Card className="p-8 bg-card/30 backdrop-blur-sm border-primary/20">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                      <Icon name="X" className="w-6 h-6 text-red-400" />
                      У нас нет
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="text-red-400">×</span>
                        телепортов /home и /tpa
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-red-400">×</span>
                        читерских фишек и имбы
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-red-400">×</span>
                        донатных преимуществ (P2W)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-red-400">×</span>
                        токсичности
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                      <Icon name="Check" className="w-6 h-6 text-green-400" />
                      У нас есть
                    </h3>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        уют и атмосфера
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        честное выживание
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        дружелюбные игроки
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        красивый мир и зимний вайб
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 winter-glow">
                Роли на сервере
              </h2>
              <p className="text-lg text-muted-foreground">
                Только то, что усиливает атмосферу, а не баланс
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roles.map((role, index) => (
                <Card 
                  key={index}
                  className={`p-6 bg-card/50 backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 animate-fade-in ${role.color}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={role.icon as any} className="w-10 h-10 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{role.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="inline-block p-6 bg-accent/10 backdrop-blur-sm border-accent/30">
                <p className="text-lg text-foreground">
                  <Icon name="Sparkles" className="w-5 h-5 inline mr-2 text-accent" />
                  Косметика: шляпы, аксессуары, частицы, эффекты, персональная музыка
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-background via-secondary/10 to-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 winter-glow">
              Связь с нами
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
                  <Card className={`p-6 bg-card/50 backdrop-blur-sm border-primary/20 transition-all duration-300 hover:scale-105 hover:bg-card ${social.color}`}>
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name={social.icon as any} className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{social.name}</h3>
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
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Icon name="Heart" className="w-4 h-4 text-red-400" />
              <span className="text-foreground">Примерно 20 человек, каждый знает друг друга</span>
            </div>
            <div className="text-xs text-muted-foreground tracking-wider">
              GEDZIVERSE © 2025 · ПРИВАТНЫЙ АТМОСФЕРНЫЙ СЕРВЕР
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
