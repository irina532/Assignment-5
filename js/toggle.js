//adding functionality for donate button
 document.getElementById('donate-btn').addEventListener('click', function(){
    document.getElementById('donation-divs').classList.remove('hidden');
    document.getElementById('history').classList.add('hidden');
    document.getElementById('donate-btn').classList.add('bg-[#B4F461]');
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
 })
 //adding funtionality for history button

 document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('history').classList.remove('hidden');
    document.getElementById('donation-divs').classList.add('hidden');
    document.getElementById('donate-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('history-btn').classList.add('bg-[#B4F461]');

 })