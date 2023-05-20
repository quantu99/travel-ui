import DefaultLayout from '../components/Layout/DefaultLayout';
function Home({ placeDatas, messages, setMessages }) {
    return (
        <div>
            <DefaultLayout placeDatas={placeDatas} messages={messages} setMessages={setMessages} />
        </div>
    );
}

export default Home;
