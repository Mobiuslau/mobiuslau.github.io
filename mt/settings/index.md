---
title: Settings & Optimisations
author: Amy
updated: 22 August 2023
---
# {{ page.title }}
{:.no_toc}

Just some stuff I found useful.

{% include article_block.html %}



## Table of Contents
{:.no_toc}

> - this unordered seed list will be replaced by toc as unordered list
> {:toc}

## FoV Buttons

Some players may like to play with higher FoV (field of view) than the default value. One way to change the FoV is by assigning a keyboard button to change it to a specified value. The configuration is as follows:

&emsp; 1. Backup the file: `"{Parent_Directory}\MT - The Dream\Client\S1Game\Config\S1Input.ini"`.

&emsp; 2. Add the following on line `9` below `bEnableMouseSmoothing=true`:

```
Bindings=(Name="PageUp",Command="fov 100")
Bindings=(Name="PageDown",Command="fov 71")

```

Now `page up` will be used to increase the FoV to `100`, and `page down` will be used to decrease it back to default (I found that `71` is the default on this system). These values can be changed to one's preference. In principle more buttons could be added for more FoV options.

## Changing Screenshot Path

The configuration is as follows:

1. Backup the file: <br>`"{Parent_Directory}\MT - The Dream\Client\S1Game\Config\S1Engine.ini"`.

2. Change the value for `ScreenShotPath` to the directory path. The default value is<br>`ScreenShotPath=%MYPICTURES%\TERA_ScreenShots`

## ShinraMeter Event Notifications

[ShinraMeter](https://github.com/neowutran/ShinraMeter) notifications are highly customisable. The config files are located in `"{ShinraMeter_Directory}\resources\config\events"`. Notifications can be configured to be either global or class specific. For global notifications, use `events-common.xml`. For notifications configured to be class specific, see `events-{class}.xml`.

Upon inspecting these files the gist of how the notifications are configured should become more or less clear. There is some limited documentation on this which can be found [here](https://github.com/neowutran/ShinraMeter/wiki/Events). A list of `abnormality` ID's can be found [here](https://raw.githubusercontent.com/neowutran/TeraDpsMeterData/master/hotdot/hotdot-EU-EN.tsv).

### Example

A simple usecase of this feature would be to add an "Edict" and "Thrall" TTS (text to speech) notification. This can be achieved by adding the following to `events-common.xml`:

```xml
    <!-- Priest boosts -->
    <abnormality active="true" ingame="true" trigger="Added" target="Self" ignore_classes="Mystic,Priest">
        <abnormalities>
            <abnormality>805803</abnormality>
            <abnormality>3012002</abnormality>
        </abnormalities>
        <actions>
            <notify>
                <text_to_speech text="Edict" voice_gender="Female" voice_age="Adult"  voice_position="0" volume="80" rate="+3"/>
            </notify>
        </actions>
    </abnormality>
    
    <!-- Mystic boosts -->
    <abnormality active="true" ingame="true" trigger="Added" target="Self" ignore_classes="Mystic,Priest">
        <abnormalities>
            <abnormality>702004</abnormality>
            <abnormality>3012012</abnormality>
        </abnormalities>
        <actions>
            <notify>
                <text_to_speech text="Thrall" voice_gender="Female" voice_age="Adult"  voice_position="0" volume="80" rate="+3"/>
            </notify>
        </actions>
    </abnormality>
```

<video src="/mt/dungeons/drch/lb/tremble.mp4" controls="controls" style="max-width: 700px;"></video>