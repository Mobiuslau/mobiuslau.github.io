# Jubeat Controller

The controller is currently W.I.P, along with this webpage. 
Citations are needed. (I will do all that. It's late at night now.)

▸ Updated on 2021-10-24, 04:00 CEST

## Table of contents

> [Jubeat Controller](#jubeat-controller)<br>
> &nbsp; &nbsp; [Glossary](#glossary)<br>
> [Arcade Cabinet](#arcade-cabinet)<br>
> &nbsp; &nbsp; [D.I.Y. Arcade Style Controller](#diy-arcade-style-controller)<br>
> &nbsp; &nbsp; [Monitor](#monitor)<br>
> &nbsp; &nbsp; [Buttons & Wiring](#buttons---wiring)<br>
> &nbsp; &nbsp; [I/O](#i-o)<br>
> [Plan](#plan)<br>
> &nbsp; &nbsp; [Files](#files)<br>
> &nbsp; &nbsp; [Parts](#parts)<br>
> &nbsp; &nbsp; [Expenses](#expenses)<br>

## Glossary

|Term|Abbreviation|Meaning|
|:-|:-|:-|
|Arcade Style Controller|ASC|Speaks for itself.|
|Arcade Cabinet|Cab|Machine from which a game can be played.|
|Ground|GND|[Reference point from which voltages are measured.](https://en.wikipedia.org/wiki/Ground_(electricity))|
|Input / Output|I/O|Speaks for itself.|
|Normally Open|NO|Circuit isn't closed; no current.|
|Printed Circuit Board|PCB|[Board which contains wiring scheme.](https://en.wikipedia.org/wiki/Printed_circuit_board)|
|Pull-up Resistor|P-UR|[Resistor used to ensure known off state for signal.](https://en.wikipedia.org/wiki/Pull-up_resistor).|
|Voltage Common Collector|VCC|[Higher voltage with respect to ground.](https://en.wikipedia.org/wiki/Common_collector)|

# Arcade Cabinet

W.I.P. 

# D.I.Y. Arcade Style Controller

## Monitor

25.5" or 26" monitors are absurdly difficult to obtain. Therefore, a 27" monitor was considered. The specific model used for this build is the [BenQ GL2780](https://tweakers.net/pricewatch/1405392/benq-gl2780-9h-punt-lj6lb-punt-qbe-zwart/specificaties/).

|Monitor|BenQ GL2780|
|:-|:-|
|Manufacturer code|9H.LJ6LB.QBE|
|Diagonal|27"|
|Panel|LCD TN|
|Resolution|(1920 x 1080) px [16/9]|
|Refresh rate|75 hz|
|Connectors|DP 1.2, DVI-D, HDMI 1.4, VGA (D-Sub)|
|DPI|82|
|Response|1 ms|
|Viewing angle|170°|
|Mounting|Vesa 100 mm|
|||
|Height|382 mm|
|Width|639.4 mm|
|Depth|52 mm|
|||
|Screen height||
|Screen width||

## Buttons & Wiring

<img src="figures/circuit.png" alt="Wiring" width="700"/>

On cabs, each button corner switch (SW#) receives its own I/O. The required amount of I/O pins would thus be 64. For an ASC, this is unnecessary. Popular microcontrollers such as the Pro Micro ATmega32U4 don't offer 64 I/O pins either way. Therefore, each SW corresponding to one button will be wired in parallel. This is possible since each switch is NO. Then, only 16 I/O pins are required. 

Internal P-UR's on the Pro Micro ATmega32U4 will be used. Therefore, it is not required to wire the buttons to a VCC with a P-UR.  

Wires used are [JST PH-9P cables with open ends](https://www.vanallesenmeer.nl/PH2.0-JST-9pin-kabel-30cm). The above diagram takes the colour scheme of these cables into account.

## I/O

<img src="https://golem.hu/pic/pro_micro_pinout.jpg" alt="Pinout" width="700"/>

There are two repo's with useful I/O code for the ATmega32U4:
* [I/O code by CrazyRedMachine](https://github.com/CrazyRedMachine/jubeatIO/tree/master/jubeatIO)
* [I/O code by Moldypie](https://github.com/Moldypie/Jubeat_IO/blob/master/jubeat_IO.ino)

Pinouts can be altered for the Pro Micro by changing the list to `{2,3,4,5,6,7,8,9,10,14,15,16,A0,A1,A2,A3}`. These I/O implementations assume that the switches for 1 button are routed in parallel, and that the board has pullup resistors built in. 

# Plan

W.I.P.

## Files

W.I.P.

## Parts

W.I.P.

## Expenses 

|Store|Part|#|€ Total|
|:-|:-|:-:|-:|
|From Japan|Panel|1|56.22|
||Shipping||73.31|
||Import Tax||36.90|
|||||
|Coolblue|BenQ GL2780|1|149.00|
||Insurance policy||29.90|
||Shipping||0.99|
|||||
|Vanallesenmeer|Arduino Pro Micro ATmega32U4 5V 16MHz|1|9.35|
||JST PH 9p Cable|16|12.00|
||Prototyping Board 2x8cm (6x28Hole) PCB Double|10|3.20|
||Prototyping Board 4x6cm (14x20Hole) PCB Double|2|1.10|
|||||
|Bauhaus|Microfibre Cloth|5|4.30|
||Ring Ratchet Wrench 7mm|1|12.35|
||Screwdriver PH2|1|8.70|
||Screwdrivers SL PH|1|14.50|
|||||
|||||
|||Total|411.82|