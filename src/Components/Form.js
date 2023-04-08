import React, { useState } from 'react'
// import VoiceSelector from './VoiceSelector';
function Form({ setSpeaking }) {
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(1);
    const [text, setText] = useState("");
    const [voice, setVoice] = useState();
    const synth = window.speechSynthesis;
    const [allVoices, setAllVoices] = useState([]);


    window.speechSynthesis.onvoiceschanged = () => {
        let fetchedVoices = synth.getVoices();
        setAllVoices(fetchedVoices);
        console.log(allVoices);
        setVoice(fetchedVoices[0].name);
    };

    function handleTextChange() {
        setText(document.querySelector('#text').value);
    }

    function handlePitchChange() {
        setPitch(document.querySelector('#pitch').value);
    }

    function handleRateChange() {
        setRate(document.querySelector('#rate').value);
    }

    function handleVoiceChange() {
        setVoice(document.querySelector('#voice').value);
    }

    const speak = () => {
        if (synth.speaking) {
            console.error('already speaking');
            return;
        }
        if (text !== '') {
            const speakText = new SpeechSynthesisUtterance(text);
            speakText.onstart = e => {
                setSpeaking(true);
            }
            speakText.onend = e => {
                setSpeaking(false);
                console.log("Finished Speaking");
            }

            speakText.onerror = e => {
                console.error('Something went wrong');
            }
            //get the selected voice from the allVoices[] of objects
            allVoices.forEach(item => {
                if (voice === item.name) {
                    speakText.voice = item;
                    speakText.lang = item.lang;
                }
            })

            speakText.rate = rate;
            speakText.pitch = pitch;
            synth.cancel();
            synth.speak(speakText);
        }
    }

    function handleSpeak() {
        speak();
    }
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='md:w-[640px] md:text-[18px]' id='form'>
                <div className='bg-primary px-6 md:px-12 py-4 rounded-xl'>
                    <h3 className='text-center text-2xl mb-3 text-dark font-semibold'>Choose Your preferences</h3>
                    <form className='flex flex-col justify-center gap-y-2'>
                        <div>
                            <textarea className='rounded bg-black/30 w-full px-3 py-1 outline-none focus:outline-secondary outline-1' id="text" rows="3" value={text} onChange={handleTextChange} placeholder='Type here...'></textarea>
                        </div>
                        <div>
                            <h6>Rate <span className='text-dark'>{rate}</span> </h6>
                            <input type="range" id="rate" value={rate} onChange={handleRateChange} min={0.5} max={2} step={0.1} className='w-full' />
                        </div>
                        <div className='mb-3'>
                            <h6>Pitch <span className='text-dark'>{pitch}</span> </h6>
                            <input type="range" id="pitch" value={pitch} onChange={handlePitchChange} min={0.5} max={2} step={0.1} className='w-full' />
                        </div>
                        <div className='flex items-center justify-center mb-3'>
                            <select id="voice" className='w-full text-black' value={voice} onChange={handleVoiceChange}>
                                {allVoices.map((item) => {
                                    return <option value={item.name} key={item.name}>{item.name} ({item.lang} )</option>
                                })}
                            </select>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <button type='button' onClick={handleSpeak} className='bg-accent dark bg-secondary px-4 py-2 rounded-3xl'>Convert</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form