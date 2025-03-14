---
title: Hello!
---

# Hello!

<img src="/assets/img/amy.png" alt="Homepage avatar image." style="margin: 5px 16px 0 0; float: left" width="300px">
I’m Amy (Mobiuslau), a theoretical physics master alumna who loves composing music, playing drums, graphic design, and playing games like Sound Voltex, Beatmania IIDX and BMS. Perhaps you’ll find something interesting here. Feel free to contact me too.<br><br> &nbsp; &nbsp; &nbsp; 🡪 [Amy's Nerdy Corner](https://mobiuslau.github.io/)<br> &nbsp; &nbsp; &nbsp; 🡪 [Youtube](https://www.youtube.com/user/mobiuslau)<br> &nbsp; &nbsp; &nbsp; 🡪 [Twitch](https://www.twitch.tv/mobiuslau)<br> &nbsp; &nbsp; &nbsp; 🡪 [Bokutachi](https://bokutachi.xyz/dashboard/users/Mobiuslau/)<br><br>I like documenting things I find interesting or might consider helpful to others, which is the purpose of this website.

<svg width="300" height="50"
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect x="0" y="0" width="300" height="50" class="svgcolone"/>
    <text x="20" y="23.9" class="svgcolthree">LATEST DEPLOYMENT</text>
    <text x="19" y="38.3" class="svgcolthree">{{ site.time | date: "%R UTC, %d %B %Y" | upcase }}</text>
    <g transform="matrix(-0.0846667,0,0,0.0846667,293,-28.28)">
        <path d="M0,416.693L0,771.024L283.464,771.024L283.464,841.89L318.897,841.89L425.197,735.592L318.897,629.291L283.464,629.291L283.464,700.159L70.865,700.159L70.865,487.558L141.733,487.558L141.733,416.693L0,416.693Z" class="svgcolthree animate-fade"/>
    </g>
    <g transform="matrix(1,0,0,1,-1,-1)">
        <path d="M298,48L298,45L297,45L297,47L295,47L295,48L298,48Z" class="svgcolthree"/>
    </g>
    <g transform="matrix(-1,0,0,1,551,-1)">
        <path d="M298,48L298,45L297,45L297,47L295,47L295,48L298,48Z" class="svgcolthree"/>
    </g>
    <g transform="matrix(1,0,0,-1,-1,51)">
        <path d="M298,48L298,45L297,45L297,47L295,47L295,48L298,48Z" class="svgcolthree"/>
    </g>
    <g transform="matrix(-1,0,0,-1,551,51)">
        <path d="M298,48L298,45L297,45L297,47L295,47L295,48L298,48Z" class="svgcolthree"/>
    </g>
    <g transform="matrix(1,0,0,1,3.68239,3.35956)">
    </g>
</svg>

<script src="/assets/js/button.js"></script>
<button class="svgbutton" onclick="buttonFunc('divYT', 'buttonYTOff', 'buttonYTOn')" style="margin: 28px 0 0 0;">{% include button_off.html buttontext="button(f'Music of the {timeFrame}.')" buttonOff="buttonYTOff" buttonOn="buttonYTOn" %}</button>
<div id="divYT" style="display: none;" class="buttondiv">
    <iframe width="448" height="252" src="https://www.youtube-nocookie.com/embed/SYQdsCnAzng" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<!-- Button help from https://stackoverflow.com/questions/45136270/opening-a-div-a-box-with-a-list-of-links-after-click-of-button -->