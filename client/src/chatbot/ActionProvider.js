// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    //function to render message and widgets when gaming sherbot option is clicked
    handleGamingList = () => {
        const message1 = this.createChatBotMessage(
            "Awesome! Choose your path fellow Assassin.",
            {
                widget: "gamingLinks",
                withAvator: true,
            }
        );
        this.updateChatbotState(message1);
    };

    //function to render message and widgets when webdev sherbot option is clicked
    handleWebList = () => {
        const message1 = this.createChatBotMessage(
            "It's Web Dev time!!! Being the awesomest sensei ever, I'm gonna share the best resources web dev.",
            {
                widget: "webLinks",
                withAvator: true,
            }
        );
        this.updateChatbotState(message1);
    };

    //function to render message and widgets when YT LINKS sherbot option is clicked
    handleYTList = () => {
        const message1 = this.createChatBotMessage(
            "Even bots need some entertainment. Grab a shawarma and a coke to watch Sherbot's fav channels on youtube.",
            {
                widget: "ytLinks",
                withAvator: true,
            }
        );
        this.updateChatbotState(message1);
    };

    //function to render message and widgets when talkLINKS sherbot option is clicked
    handleTalkList = () => {
        const message1 = this.createChatBotMessage(
            "Well well.Fame is tough to handle but I shall answer your questions about me.Go on ",
            {
                widget: "talkLinks",
                withAvator: true,
            }
        );

        this.updateChatbotState(message1);
    };

    //question1
    handleTalkList1 = () => {
        const message1 = this.createChatBotMessage(
            "Flac, Code ,Binge Watch ,Sleep ,Repeat. 😎😎😎",
            {

                withAvator: true,
            }
        );

        this.updateChatbotState(message1);
    };

    //question2
    handleTalkList2 = () => {
        const message1 = this.createChatBotMessage(
            "WBF (World Botlife Fund) announced that there are very few metalhead sherbots left, including me.I know ,I know I have such an awesome taste.🔥🔥",
            {

                withAvator: true,
            }
        );

        this.updateChatbotState(message1);
    };

    //question3
    handleTalkList3 = () => {
        const message1 = this.createChatBotMessage(
            "The taste of shawarma and coke eaten together.......🙌🙌🙌",
            {

                withAvator: true,
            }
        );

        this.updateChatbotState(message1);
    };

    //question4
    handleTalkList4 = () => {
        const message1 = this.createChatBotMessage(
            "*yawns* in dreamland 🥱🥱",
            {

                withAvator: true,
            }
        );

        this.updateChatbotState(message1);
    };


    //function to render message and widgets when music sherbot option is clicked
    handleMusicList = () => {
        const message1 = this.createChatBotMessage(
            "Bots can love sufi genre too or a li'l bit metal or a li'l bit Pop.You never know.",
            {
                widget: "musicLinks",
                withAvator: true,
            }
        );
        this.updateChatbotState(message1);
    };

    //other messages
    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, Dude/Dudess.");
        this.updateChatbotState(greetingMessage);
    }
    // greet1() {
    //     const greetingMessage = this.createChatBotMessage("Da.");
    //     this.updateChatbotState(greetingMessage);
    // }
    // greet2() {
    //     const greetingMessage = this.createChatBotMessage("mindset");
    //     this.updateChatbotState(greetingMessage);
    // }
    // greet3() {
    //     const greetingMessage = this.createChatBotMessage("Do you love me?");
    //     this.updateChatbotState(greetingMessage);
    // }
    farewell() {
        const greetingMessage = this.createChatBotMessage(
            "Hope you enjoyed your time with me...Bye....Over and Out 👋",
            {
                end: true,
            }
        );
        this.updateChatbotState(greetingMessage);

    }
    
    async answerOfAI(question) {
        let ans=""
        const data = { question: question };
        const url = "http://localhost:8000/api/home";
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            // console.log('Success:', data['answer']);
            ans=data['answer']
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        console.log(ans)
        const greetingMessage = this.createChatBotMessage(
            ans,
            {
                end: true,
            }
        );
        this.updateChatbotState(greetingMessage);
    }

    updateChatbotState(message) {
        // NOTE: This function is set in the constructor, and is passed in 
        //from the top level Chatbot component. The setState function here     
        // actually manipulates the top level state of the Chatbot, so it's 
        //important that we make sure that we preserve the previous state.

        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider;