# Aplicativo Flashcards Móveis

Aplicativo para dispositivos móveis (Android) que permite que usuários estudem uma coleção de flashcards. Com o app, os usuários poderão criar diferentes categorias de flashcards chamadas de "baralhos", adicionar flashcards a esses baralhos, e fazer os quizes nestes baralhos.

## Bibliotecas do projeto
Este projeto utiliza as seguintes bibliotecas:
- React Native Elements
- Native Base
- React Navigation

## Estrutura do projeto
???


## Instalando o Create React Native App
`npm install -g create-react-native-app`

## Expo
`npm install -g expo-cli`
[baixar o aplicativo] (https://play.google.com/store/apps/details?id=host.exp.exponent)

## Instalando as dependências do projeto
`npm install`

## Simulando 
https://facebook.github.io/react-native/docs/getting-started.html
	
## Configurando o Simulador Android
### Parte 1

1) Instale uma versão recente do Java SE Development Kit(JDK). 
    http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
2) Instale o [Android Studio
    https://developer.android.com/studio/index.html
    
Selecione a configuração "Custom" quando solicitado. Garanta que as caixas ao lado de todas as opções a seguir estão selecionadas:
- Android SDK
- Android SDK Platform
- Performance (Intel ® HAXM)
- Android Virtual Device

3) Clique em "Next".
4) Execute o Android Studio.
5) Clique em "Configure" e selecione "SDK Manager".
6) Selecione a aba "SDK Platforms".
7) Coloque uma marca de seleção em "Android API 28", "Android 8.0", "Android 6.0 (Marshmallow)," "Android 7.0" e "Android 7.1.1".
8) Vá para a aba "SDK Tools".
9) Selecione:
- Android SDK Build-Tools
- Android SDK Platform-Tools
- Android SDK Tools
- Android Emulator
- Intel x86 Emulator Accelerator (HAXM installer)
Abaixo de Support Repository, selecione a opção "Android Support Repository"
10) Clique em "OK".
11) Siga as direções na tela e instale os componentes solicitados.
12) Se você estiver em uma máquina Windows, instale o Intel x86 Emulator Accelerator pelo Android SDK Manager, caso seja necessário.
13) Se você estiver em uma máquina Windows ou Linux, garanta estar habilitada a Virtualization Technology nas configurações da sua BIOS.
14) Se você estiver em uma máquina Windows:
    a) Abra o Android Studio. Vá em "File" e clique em "Project Structure". Certifique-se de que esta caixa de seleção está marcada: "Use embedded JDK(recommended)." Por favor, copie o local do arquivo Android SDK (e.g. C:\User\userName\AppData\Local\Android\Sdk); iremos usá-lo logo.
    b) Abra o Painel de Controle do sistema. Clique em "Configurações avançadas do sistema." Selecione "Variáveis de Ambiente". Crie uma nova variável ANDROID_HOME e configure-a para ser o local do arquivo Android SDK que você copiou antes.
    Crie uma nova variável JAVA_HOME e configure-a para o caminho de instalação do Java Development Kit (e.g. C:\Program Files\Java\jdk1.8.0_171).

15) Se você estiver em um macOS ou Linux:
    a) Abra o Android Studio. Clique em "Configure" e selecione "SDK Manager" novamente. Vá para Appearance & Behavior -> System Settings -> Android SDK.
    b) Olhe o caminho que está preenchido para a seção do "Android SDK Location". Deveria ser algo como: /Users/yourName/Library/Android/sdk. Se você está em um macOS ou Linux, adicione a localização do Android SDK a seu CAMINHO usando ~/.bash_profile ou ~/.bash_rc (e.g. echo 'export PATH=$PATH:~/Library/Android/sdk/'>>~/.bash_profile).
    c) No macOS, você também precisará adicionar platform-tools a seu ~/.bash_profile ou ~/.bash_rc (e.g. echo 'export PATH=$PATH:~/Library/Android/sdk/platform-tools' >>~/.bash_profile, source ~/.bash_profile).
    d) Certifique-se de que você consegue executar adb do seu terminal.
    
### Parte 2
Você pode escolher usar tanto o Android Studio Emulator quanto o Genymotion como seu simulador. Você não tem que instalar ambos.

Direções para configuração do Android Studio Emulator
1) Abra o Android Studio.
2) Clique em "Start a new Android Studio project". Você não precisa mudar nenhuma das configurações; apenas clique em "Finish". Clique em "Finish".
3) Uma vez que um novo projeto é criado, olhe as mensagens no Gradle Console.
    Se aparecer qualquer mensagem de erro para você pedindo que instale algum software adicional, pedimos que o instale.
4) Selecione "Tools" --> "AVD Manager". Certifique-se de que a caixa de seleção de "Enable ADB Integration" está selecionada.
5) Clique em "Create Virtual Device".
6) Selecione a imagem do sistema desejada e clique em "Download".
7) Quando o download estiver concluído, clique em "Next" e "Finish".
8) Clique no botão Play.
    Intel HAXM is required to run this AVD.
    Android Emulator is incompatible with Hyper-V.
        Unfortunately, you cannot have Hyper-V running and use the emulator.
        Here is what you can do:
        1) Start a command prompt as Administrator
        2) Run the following command: C:\Windows\system32> bcdedit /set hypervisorlaunchtype off
        3) Reboot your machine.

## Executando a aplicação
Dentro do diretório do projeto, execute o comando `expo start`.