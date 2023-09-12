var microphoneButton = document.getElementById('startRecordingBtn')
var recordingControlButtonsContainer = document.getElementById(
    'recordingContorlBtnContainer'
)
var stopRecordingButton = document.getElementById('stopRecordingBtn')
var cancelRecordingButton = document.getElementById(
    'cancelRecordingBtn'
)
var elapsedTimeTag = document.getElementById('elapsed-time')
var overlay = document.getElementById('overlay')
var audioElement = document.getElementById('audioElement')
// var audioElementSource = audioElement.getElementsByTagName('source')[0]
// var audioElementSource = document.getElementsByClassName("audio-element")[0]
var audioElementSource = document.getElementById('audioElement')


var textIndicatorOfAudiPlaying = document.getElementsByClassName(
    'text-indication-of-audio-playing'
)[0]
const removeRecordingVoice = document.getElementById(
    'removeRecordingVoice'
)

const voiceCustomerAttribute = document.getElementById(
  'product_attribute_671'
)
const uploadSection = document.getElementById('uploadSection')
const customerVoiceTitle = document.querySelectorAll('customerVoiceTitle')
const uploadBtn = document.getElementById('upload')
const uploadBtnsvg = document.querySelector('#upload svg')
const uploadBtnspan = document.querySelector('#upload span')

let cancelRecordingVoice = true

/** Stores the actual start time when an audio recording begins to take place to ensure elapsed time start time is accurate*/
var audioRecordStartTime
/** Stores the maximum recording time in hours to stop recording once maximum recording hour has been reached */
var maximumRecordingTimeInHours = 1
/** Stores the reference of the setInterval function that controls the timer in audio recording*/
var elapsedTimeTimer

let audioRecorder

//Listeners
let chunks = []




// Get the media stream from the user's microphone
navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(function (stream) {
        // Create a new MediaRecorder object to record the audio
        audioRecorder = new MediaRecorder(stream)

        console.log('audioRecorder', audioRecorder)

        let formData = new FormData()

        // Start recording when the user clicks a button
        microphoneButton.addEventListener('click', function () {
            console.log('Recording Audio...')

            //start recording using the audio recording API
            audioRecorder.start()

            //store the recording start time to display the elapsed time according to it
            audioRecordStartTime = new Date()

            //display control buttons to offer the functionality of stop and cancel
            handleDisplayingRecordingControlButtons()
        })

        audioRecorder.addEventListener('stop', () => {
            // Convert the chunks array to a Blob object
            const fileName = `recording_${Date.now()}.ogg`

            // create a blob from the recorded chunks
            const blob =
                chunks.length > 0
                    ? new Blob(chunks, { type: 'audio/ogg; codecs=opus' })
                    : null
            // create a URL from the blob
            const url = URL.createObjectURL(blob)

            // // create an audio element to play the recorded audio
            // const audio = new Audio(url)

            // // append the audio element to the document body
            // document.body.appendChild(audio)

            const fileSize = blob.size
            console.log(`File size: ${fileSize} bytes`)

            // Display the recorded audio as a voice
            audioElement.src = url
            audioElement.setAttribute('controls', true)
            formData = new FormData()
            formData.append('qquuid', generateGuid())
            formData.append('qqfilename', fileName)
            formData.append('qqtotalfilesize', fileSize)
            formData.append('qqfile', blob, { type: 'audio/wav' }, fileName)
            chunks = []
        })

        stopRecordingButton.addEventListener('click', function () {
            console.log('Stopping Audio Recording...')
            //stop the recording using the audio recording API
            audioRecorder.stop()

            //hide recording control button & return record icon
            microphoneButton.classList.add('hide')
            recordingControlButtonsContainer.classList.add('hide')
            clearInterval(elapsedTimeTimer)
            uploadSection.classList.remove('hide')
        })

        // document
        //     .getElementById('clear')
        //     .addEventListener('click', function () {
        //         console.log('clear Audio...')
        //
        //         audioRecorder.stop()
        //         chunks = []
        //         audioRecorder.mediaRecorder = null
        //         audioRecorder.streamBeingCaptured = null
        //     })

        document
            .getElementById('upload')
            .addEventListener('click', function () {
                uploadRecording(formData)
            })

        document
            .getElementById('removeRecordingVoice')
            .addEventListener('click', function () {
                console.log('remove Audio...')
                uploadSection.classList.add('hide')
                recordingControlButtonsContainer.classList.add('hide')
                microphoneButton.classList.remove('hide')
                ////////////////////////////////////////////////
                voiceCustomerAttribute.value = ''
                const audio = document.querySelector('audio')
                audio.pause()
                chunks = []
            })
        
        cancelRecordingButton.addEventListener('click', function () {
            console.log('Canceling audio...')
            audioRecorder.stop()
            chunks = []
            audioRecorder.mediaRecorder = null
            audioRecorder.streamBeingCaptured = null

            uploadSection.classList.add('hide')
            recordingControlButtonsContainer.classList.add('hide')
            microphoneButton.classList.remove('hide')
            clearInterval(elapsedTimeTimer)
        })

        // When the MediaRecorder has data available, add it to the chunks array
        audioRecorder.addEventListener('dataavailable', function (event) {
            console.log('event.data',event.data)
            chunks.push(event.data)
            
        })
    })
    .catch(function (error) {
        console.error('Error getting user media:', error)
    })

function generateGuid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
    }
    return (
        s4() +
        s4() +
        '-' +
        s4() +
        '-4' +
        s4().substr(0, 3) +
        '-' +
        s4() +
        '-' +
        s4() +
        s4() +
        s4()
    )
}
////////////////////////////////////////////// UploadRecording
function uploadRecording(formData) {
    upload.disable = true
    uploadBtnsvg.style.display = 'none'
    uploadBtnspan.style.display = 'none'
    upload.classList.add('loading')
    let url = `${window.location.origin}/uploadfileproductattribute/671`
    fetch(url, {
        headers: {
            accept: 'application/json',
            'cache-control': 'no-cache',
        },
        method: 'POST',
        body: formData,
    })
        .then((response) => response.json())
        .then(function (response) {
            console.log('Recording sent to API')
            if (response.success) {
                const audio = document.querySelector('audio')
                // audio.currentTime = 0
                audio.pause()
                voiceCustomerAttribute.value = response.downloadGuid
                //////////////////////////////////////////////////
                uploadSection.classList.add('hide')
                successUpload.classList.add('successUpload-show-block')
                setTimeout(function () {
                    successUpload.classList.add('successUpload-show')
                }, 1000)

                //////////////////////////////////////////////////////
                //  errorNotify.innerHTML = response.message
                // document.getElementById('notification').classList.add('received')
                // TODO: set downloadGuid on input
            } else {
            }
            upload.disable = false
            uploadBtnsvg.style.display = 'block'
            uploadBtnspan.style.display = 'block'
            upload.classList.remove('loading')
        })
        .catch(function (error) {})
}

/** Computes the elapsed recording time since the moment the function is called in the format h:m:s*/
function handleElapsedRecordingTime() {
    //display inital time when recording begins
    displayElapsedTimeDuringAudioRecording('00:00')

    //create an interval that compute & displays elapsed time, as well as, animate red dot - every second
    elapsedTimeTimer = setInterval(() => {
        //compute the elapsed time every second
        let elapsedTime = computeElapsedTime(audioRecordStartTime) //pass the actual record start time
        //display the elapsed time
        displayElapsedTimeDuringAudioRecording(elapsedTime)
    }, 1000) //every second
}

/** Display elapsed time during audio recording
 * @param {String} elapsedTime - elapsed time in the format mm:ss or hh:mm:ss
 */
function displayElapsedTimeDuringAudioRecording(elapsedTime) {
    //1. display the passed elapsed time as the elapsed time in the elapsedTime HTML element
    elapsedTimeTag.innerHTML = elapsedTime

    //2. Stop the recording when the max number of hours is reached
    if (elapsedTimeReachedMaximumNumberOfHours(elapsedTime)) {
        stopAudioRecording()
    }
}

/**
 * @param {String} elapsedTime - elapsed time in the format mm:ss or hh:mm:ss
 * @returns {Boolean} whether the elapsed time reached the maximum number of hours or not
 */
function elapsedTimeReachedMaximumNumberOfHours(elapsedTime) {
    //Split the elapsed time by the symbo :
    let elapsedTimeSplitted = elapsedTime.split(':')

    //Turn the maximum recording time in hours to a string and pad it with zero if less than 10
    let maximumRecordingTimeInHoursAsString =
        maximumRecordingTimeInHours < 10
            ? '0' + maximumRecordingTimeInHours
            : maximumRecordingTimeInHours.toString()

    //if it the elapsed time reach hours and also reach the maximum recording time in hours return true
    if (
        elapsedTimeSplitted.length === 3 &&
        elapsedTimeSplitted[0] === maximumRecordingTimeInHoursAsString
    )
        return true
    //otherwise, return false
    else return false
}

/** Computes the elapsedTime since the moment the function is called in the format mm:ss or hh:mm:ss
 * @param {String} startTime - start time to compute the elapsed time since
 * @returns {String} elapsed time in mm:ss format or hh:mm:ss format, if elapsed hours are 0.
 */
function computeElapsedTime(startTime) {
    //record end time
    let endTime = new Date()

    //time difference in ms
    let timeDiff = endTime - startTime

    //convert time difference from ms to seconds
    timeDiff = timeDiff / 1000

    //extract integer seconds that dont form a minute using %
    let seconds = Math.floor(timeDiff % 60) //ignoring uncomplete seconds (floor)

    //pad seconds with a zero if neccessary
    seconds = seconds < 10 ? '0' + seconds : seconds

    //convert time difference from seconds to minutes using %
    timeDiff = Math.floor(timeDiff / 60)

    //extract integer minutes that don't form an hour using %
    let minutes = timeDiff % 60 //no need to floor possible incomplete minutes, becase they've been handled as seconds
    minutes = minutes < 10 ? '0' + minutes : minutes

    //convert time difference from minutes to hours
    timeDiff = Math.floor(timeDiff / 60)

    //extract integer hours that don't form a day using %
    let hours = timeDiff % 24 //no need to floor possible incomplete hours, becase they've been handled as seconds

    //convert time difference from hours to days
    timeDiff = Math.floor(timeDiff / 24)

    // the rest of timeDiff is number of days
    let days = timeDiff //add days to hours

    let totalHours = hours + days * 24
    totalHours = totalHours < 10 ? '0' + totalHours : totalHours

    if (totalHours === '00') {
        return minutes + ':' + seconds
    } else {
        return totalHours + ':' + minutes + ':' + seconds
    }
}

/** Creates a source element for the the audio element in the HTML document*/
// function createSourceForAudioElement() {
//     let sourceElement = document.createElement('source')
//     audioElement.appendChild(sourceElement)
//
//     audioElementSource = sourceElement
// }

/** Displays recording control buttons */
function handleDisplayingRecordingControlButtons() {
    microphoneButton.classList.add('hide')
    recordingControlButtonsContainer.classList.remove('hide')
    //Handle the displaying of the elapsed recording time
    handleElapsedRecordingTime()
}
/** Cancel Recording Voice */
function handleCancelingRecording() {
    uploadSection.classList.add("hide");
    recordingControlButtonsContainer.classList.add("hide");
    microphoneButton.classList.remove("hide")
    clearInterval(elapsedTimeTimer)

}