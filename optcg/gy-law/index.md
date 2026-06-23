---
title: "GY Law: A Learner's Reference"
authors:
    - "Amy"
    - "Shimona"
contributors:
    - "Swagzaur"
reviewers:
    -
# updated: "23-06-2026"
---
<h1 style="margin: 0 0 0px 0">{{ page.title }}</h1>
🡮 *authored by {{ page.authors | join: ' & '}} &nbsp; | &nbsp; contributors: {{ page.contributors | join: ', '}}*<br>
🡮 *reviewers: {{ page.reviewers | join: ', '}}*<br>

This article serves as a starting point for players new to the deck and those looking to start playing, as well as a reference. Since the deck is considered to be fairly difficult to play and does not have a strict curve, it can be hard to figure out its most effective strategies and playlines, and how each card is used optimally against certain opponents. Firstly, the philosophy of the deck is discussed, after which a list of relevant cards to the deck is provided, with a description accompanying most of them. It should be noted that nicknames have been assigned to most cards for easier reference throughout the document. Finally, gameplay strategies and certain matchups are discussed. This article is not a strict guide per se, but rather elaborates on the deck and its package's effects and strategies, and how they can be used. The authors will do their best to update this work until otherwise specified. Its first iteration was written during OP15 and early OP16.

<span style="color:red">This resource is *not* to be used <em>during</em> games in any way, shape or form!</span>

Changes and additions can be suggested by submitting a [Pull Request](https://github.com/Mobiuslau/mobiuslau.github.io/pulls), writing an [issue](https://github.com/Mobiuslau/mobiuslau.github.io/issues), or sending a message to `mobiuslau` on Discord.

Changelog: [page history](https://github.com/Mobiuslau/mobiuslau.github.io/commits/main/optcg/gy-law/index.md), [cardlist history](https://github.com/Mobiuslau/mobiuslau.github.io/commits/main/_data/gy_law.json).

## Acknowledgements
{:.no_toc}

We would like to thank Swagzaur for their contributions to the description of [ILY](#ily). Furthermore, we would like to thank the GY Law community in the [respective channel from the `One Piece Trading Card Game Community` Discord server](https://discord.com/channels/950260529946050610/1373094217584345229). The discussions there have provided us with much valuable insight, not only for learning the deck, but also for helping each other improve and truly understand it and its position in the landscape of matchups. This article contains our culminated knowledge about this leader obtained from these discussions and many games.

<!-- &nbsp; is unbroken space, &emsp; is an em tab. -->

## Table of Contents
{:.no_toc}

> - this unordered seed list will be replaced by toc as unordered list
> {:toc}

## 1. &nbsp; Philosophy of the Deck

### 1.1. &nbsp; The Leader Ability

{% include optcg_card_inline.html id="OP10-022" side="right" %}

Even though this leader has a single `Activate:Main` effect, henceforth referred to as LA, it can be thought of as having 2 separate abilities and a side-effect. If a DON!! is given to the leader, and the total cost of the player's characters on the board is 5 or more, once per turn:

1. *A character can be bounced from the board to hand.*<br>
This is the activation cost of the LA, a somewhat powerful ‘ability' on its own that is regularly used during a game, almost as often as every turn. On the surface, it may not sound interesting or strong to bounce a character, perhaps weak even. There are multiple reasons why this is somewhat strong, however. Firstly, it allows for `On-Play` abilities from a single card to be used multiple times per game, provided there is enough DON!! to play the character again afterwards. This is particularly useful with searchers, which are thus typically used multiple times per game. As long as a single copy of a particular card remains in play, this ‘ability' allows for this `On-Play` to be fired multiple times per game. Secondly, it can be used to make space for other characters if the board is full. This prevents the cards from being trashed. Lastly, it can help keep the hand healthy with counter cards. Important characters such as [Bege](#bege) can be used as counter after they have been used for their primary purpose.


2. *A 5c or less `Supernovas` character can be played from life.*<br>
This allows for an extra character to enter the board without spending its cost, significantly increasing tempo. It is typically done only once or twice per game, mostly during the early mid-game, since effectively a life is traded for the ability to play a body, making life more vulnerable. Thus, only 5c `Supernovas` characters are usually worth playing from life this way. Healers such as [7c](#7c), [8c](#8c), and [Borsa](#borsa) mitigate this vulnerability such that this ability could be used during a turn in or before which a healer is played without losing net life, therefore allowing more aggressive plays during a game. Still, this ability is typically used once, perhaps twice if aggression is vital for winning, during the mid-game without breaking even on life, typically during the 4d, 5d, or 6d turns. It may also be used during lethals to fire the effect of a character card cheaply without expecting survival, such as playing [Stunbon](#stunbon) to stun a `Blocker`, which even restands the DON!! used to stack it in life with [Bege](#bege).

🡪 *The side-effect is that the top of life is revealed.*<br>
This is not as impactful in each game. However, it can be incredibly valuable to remember which card is at the top of life. It can help determine whether survival is possible in the context of counter. Moreover, if a critical card is in life, a stacker like [Bege](#bege) can be used to grab it. Since the top of life is revealed, opponents have access to the same knowledge as well and can therefore make the same calculations as the player.

These ‘abilities' make for an incredibly flexible leader, which plays an equally flexible `Supernovas` package with a few guests. Cards move often between the hand, life, and character areas.


### 1.2. &nbsp; Game Plan

The goal of the deck is to outtempo the opponent by cheating out bodies to make explosive, and Don-efficient plays while disrupting the opponent's game plan. It typically creates a strong, wide board rather quickly, with characters of 6k power or more during the mid-game. As such, it can be played somewhat aggressively, but it has tools to sustain a longer game, though typically the end-game is not as strong as that of other decks, such that most tempo is gained during the mid-game.

The early game usually involves searching heavily to find vital pieces, such as 5c `Supernovas` and cards that set up life. Searchers will contribute to the LA's requirement of having a total cost of 5 on the board. The goal here is to establish a 5c body as early as possible, typically Cavendish, which allows for an additional 2 DON!! to be used every turn, enabling the highly DON!!-efficient plays this deck is known for. Going 2nd, this is possible as early as during the 4d turn, in which Cavendish, or any other 5c `Supernovas` for that matter, can be played from life. Going 1st, the most optimal scenario is for Cavendish to be played raw and another 5c `Supernovas` from life during the 5d turn.

During the mid-game, a wider board is built by utilising the  LA and pieces like [6c Law](#6c) that cheat out bodies. [Stunbon](#stunbon) can be used to hinder enemy swings or blocks, and [Freezebon](#freezebon) to prevent the opponent from playing their vital turns correctly by freezing their Don. This deck can quickly run out of steam, so it is important to plan an out during the mid-game.

In the late-game the focus is usually set on finding a way to go for lethal quickly. If that isn't possible, stalling is possible by utilising stunning, freezing and healing. The deck has the tools to do both, but it is not capable of playing big, scary characters to strengthen the board unless a card like [Law & Bepo](#lawpo) is included as tech.

Since a lot of focus is placed on building a strong board during the early- and mid-game, it is vitally important that it is well protected with counter and board-protection cards. It can be incredibly difficult to rebuild a strong and healthy board later in the game. Cavendish is often the target for swings and removal effects, and has priority for protection as well. The deck is rather good at developing a healthy hand early, though, to help counter board swings. Decks focused on removal and board control are typically tough opponents. Keeping removal-protection throughout the mid-game is vital in such matchups.

### 1.3. &nbsp; Difficulty

GY Law is one of the more difficult decks to pilot. The reasons are outlined here not to discourage new players, but to help understand some of the things GY Law players consider when playing the deck, hopefully leading to educated decision-making during games. Some of these points are not necessarily unique to this deck, but are still worth mentioning.

🡪 *The deck is fairly fragile.*<br>
Playing a body using LA essentially reduces life, making the deck fragile almost by definition. It has tools to mitigate this, such as ones which stun or freeze bodies, or bodies which gain `Blocker` when on 1 life. As such, this deck is not too uncomfortable on a low amount of life, but is still rather vulnerable. Particular mistakes can quickly prove to be lethal for the player.

*It requires good knowledge of the game.*<br>
This deck is rather flexible, such that it benefits greatly from the player knowing the mechanics and rules of the game very well to exploit them. Every aspect of the game's mechanics should be optimised to increase the chance of success with the deck. Moreover, the player should be able to evaluate their tempo relative to the opponent well during each point in the game to make well-educated decisions. In principle, these points are not unique to this deck, as any deck benefits greatly from good knowledge of the game.

🡪 *A good understanding of the opponent's deck is essential.*<br>
An important part of the game plan is to disrupt the opponent, and this deck provides useful tools to do so. As a result, it is vital to sufficiently know the game plan and serious threats of the opponent, so that the right tool can be used and the right play can be made at the right time. Moreover, knowing the strengths and weaknesses of the opponent leads to better decision-making on defensive and offensive strategies and which of the many to employ in the moment. Since this deck is rather fragile and does not have many tall bodies, it is key to play to the opponent's strengths and capitalise on their weaknesses. Lastly, by knowing the opponent well, the right turn order can be chosen. This deck does not necessarily have a large preference for starting either first or second. As a result, it is often more effective for players to pick the opponent's preferred turn order. In a particular sense, this deck is both proactive and reactive.

🡪 *It is a toolbox deck.*<br>
The deck does not include many by-definition strong cards. Most of its roster consists of cards with particular beneficial effects, its *tools*, chosen to be included based on the strong decks in the current landscape. Hence, *toolbox* deck. It does not play many proactive strong cards, but rather includes the tools specifically to increase tempo against strong decks currently played. A clear example is the inclusion of Promo Kid when Green Zoro was a strong, prominent deck in the landscape.

🡪 *This deck searches, a lot.*<br>
Searchers play a vital role in finding the right tool for the right time. Not only is the number of searchers in the deck typically high, but they are also often bounced and replayed, such that this deck searches almost every turn. A lot of cards are seen this way, making this deck rather consistent. The difficulty lies in understanding which of the many cards to search for or pick. Different opponents and situations call for different tools. Being able to think ahead is incredibly valuable for this deck.

🡪 *There are many different playlines and combos it can play.*<br>
It thrives off a creative mind that can come up with DON!!- and hand-efficient yet effective playlines and combos. It doesn't necessarily have a strict curve past the early game, typically after the 5d or 6d turns. Since many options are presented to the player, it can be rather difficult at times to pick the right one or come up with one to begin with.

🡪 *It can be exhausting to play many games, such as during regional-level tournaments.*<br>
Typically, sufficient consideration is put into each turn and each of the many actions this deck performs. This may be exhausting relatively quickly for newer players and even some veteran players.

It will take time to understand the deck, its playlines, and what plays are strong against various opponents. As a result, however, being victorious after playing an intricate dance with the pieces is incredibly rewarding, leaving the player longing for more.


## 2. &nbsp; The Deck

### 2.1. &nbsp; Structure

A basic list for this deck typically includes the following:

- *12 searcher cards.*
Searchers are the bread and butter of the deck, since they allow the player to find the right pieces at the right time. Having more searchers, therefore, improves the consistency of the deck and increases the probability of finding one or more in the opening hand. 12 is a good balance between the number of searchers and the searchable pieces. Having 10 or 11 searchers is playable, but often less desirable by most current players.

- *8 to 12 2k counter character cards.*
It is vital to protect the board after it is established and to keep the tempo. 12 is the most comfortable amount, but it is possible to include fewer, though no fewer than 8.

- *A minimum of 11 or 12 LA targets, i.e. 5c `Supernovas` type cards.*
Cheating out 5 cost characters with LA or [6c](#6c) increases tempo massively. As such, it is desirable to include enough targets for these abilities.

- *2 to 4 finisher cards.*
These cards greatly aid with, or create the opportunities for, lethal turns to win the game. 2 or 3 are the most common amount.

Decklists may vary from player to player. Since this is a toolbox deck, suitable tools should be chosen for the environment in which the deck will be played, from locals to regional-level tournaments. It may have to face different opponents at different events.

It can be helpful to deckbuilders to make educated decisions on the amount of a particular card included based on the Hypergeometric Distribution, which is used to calculate the probabilities of sampling without replacement[^hypersource]. In the context of the game, it can be used to calculate the probability of finding one or multiple of a particular card (successes) after some number of draws (sample) from the deck (population). The equation is not given here, but it can be found in David M. Lane et al.[^hypersource]. An online calculator may be used to evaluate such probabilities[^hypercalc].

Suitable cards for the deck are categorised and listed below. "Number of copies" denotes the number of copies of a particular card that are typically played or seen in lists, which, in principle, can be deviated from.

### 2.2. &nbsp; Suitable Cards

{% for item in site.data.gy_law.mainPieces %}
#### 2.2.{{forloop.index}}. &nbsp; {{ item.title }}

{{ item.desc }}

<!-- https://github.com/jekyll/jekyll/issues/3577 -->
{% for subitem in item.pieces %}
{% capture mainPiecesOrder %}
{% cycle "left", "right" %}
{%- endcapture %}
{% include optcg_card_inline.html id=subitem.id side=mainPiecesOrder label=subitem.label%}
<b style="font-size: 16px;">🡮 {{ subitem.name }}</b>{% if subitem.nick %}&emsp;*{{ subitem.nick }}*{% endif %}<br>
{{ subitem.desc }}<br><br>
*Number of copies:* {{ subitem.num }}<br clear="all"><br>
{% endfor %}
{% endfor %}
<!-- {% cycle "1", "3" %} -->
<!-- {% include optcg_card_flex.html name=subitem.name nick=subitem.nick desc=subitem.desc num=subitem.num id=subitem.id label=subitem.label order=mainPiecesOrder %} -->

#### 2.2.9. &nbsp; Other Pieces to Consider

<div>
    {% for item in site.data.gy_law.otherPieces %}
    <a target="_blank" href="https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/one-piece/{{ item.id | split: "-" | first}}/{{ item.id }}_EN.webp">
        <img {% if item.label %}id="{{ item.label }}" {% endif %}src="https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/one-piece/{{ item.id | split: "-" | first}}/{{ item.id }}_EN.webp" style="width: 19.5%">
    </a>
    {% endfor %}
</div>

### 2.3. &nbsp; Example Lists

#### 2.3.1. &nbsp; OP15

{% include image_inline.html side="left" width="49%" label="amys-op15-v16" src="example_list_amy_op15_v16.png" %}
<b style="font-size: 16px;">🡮 Amy's OP15 Version 16</b><br>
"I like to play more aggressively, aiming to out on the first or second 10d turns. As such, I chose to include 4 of [6c](#6c) and 2 of [7c](#7c), as [7c](#7c) feels rather slow compared to [6c](#6c). I chose [Perona](#perona) over [Bonney](#bonney-searcher) since it finds [Femlaw](#femlaw) and only costs 1, which is much easier to play out at any point during the game, and is much better fo the [Turbo Cavendish](#-4d---turbo-cavendish) strategy. [Hody](#hody) was chosen over [DMG](#dmg) since it hits slightly harder most of the time. It is a really good card for Lucy. As for the playset f [Freezebon](#freezebon), I found that I critically needed it in certain matchups to prevent plays like 7c Zoro or I am Whitebeard, just to name a few. I really wanted to see it, and as a result, I chose to play 4. [Borsa](#borsa) is just a cracked card which can be turbo-abused in this deck; I can't say much more about it [All Out](#all-out) rounds out the list as a solid 3k counter event, which can help alleviate pressure against aggressive opponents."
<br clear="all"><br><!-- https://www.uvm.edu/~bnelson/computer/html/wrappingtextaroundimages.html -->

In the end, Shimona played a similar list, with 2 [Freezebon](#freezebon) swapped for 2 [Drake](#drake).

{% include image_inline.html side="right" width="49%" label="shimonas-op15-no-borsa" src="example_list_shimona_op15_no_borsa.png" %}
<b style="font-size: 16px;">🡮 Shimona's OP15 No Borsa</b><br>
"This list aims to be more consistent, with no unsearchable pieces. More [Femlaw](#femlaw) and [7c](#7c) can make up for the healing lost with [Borsa](#borsa). [Drake](#Drake) is great tech into any leader who utilises low cost Blockers or has important low cost pieces, such as Girl in Nami. He can also be used to fulfill the conditions for a 4d LA use. The higher number of 2k counters also allows for better counter game and makes it easier to protect the board. Lastly, [Perona](#perona) is very consistent with a total of 27 targets, having an extremely low whiff chance."
<br clear="all"><br>

{% include image_inline.html side="left" width="49%" label="skepas-op15-sr" src="example_list_skepas-op15-sr.png" %}
<b style="font-size: 16px;">🡮 Skepas' Store Regional 2nd Place[^skepaslist]</b><br>
<br clear="all"><br>

#### 2.3.2. &nbsp; OP16

## 3. &nbsp; Gameplay

### 3.1. &nbsp; Example Playlines and combos

Listed below are some example playlines and combos suitable for amounts of DON!!, and hence turns. Some are also applicable when more DON!! is available during the turn. For instance, any 6d playline can also be played during a 7d turn. Keep in mind that these are *examples*; it is up to the player to come up with the best line of play for the situation they are in. These examples, more so, serve to show some of the things this deck can do. Therefore, it is not necessary to learn them by heart. However, it is beneficial to understand how the pieces interact with each other, like in the examples, so that a creative mind can make the most of each situation.

In any of the examples below, if any DON!! remains active at the end of the line(s), they may be used to additionally search with if there is space on the field, or to swing taller with the leader, for instance.

#### 3.1.1. &nbsp; 4-DON!! Turns

##### 🡮 4d - Turbo [Cavendish](#cav)
{:.no_toc}

<video src="playline-videos/4d_turbo_cav.mp4" controls="controls" style="max-width: 100%;"></video>

This is often the best-case scenario for the early game, as it establishes [Cavendish](#cav) early. The goal here is to set up bodies on the field for a total cost of 5, whilst being able to stack life, to then LA. Most of the time, this entails searching with the first 4 DON!! for [Cavendish](#cav), [Bege](#bege), searchers, or any other low-cost bodies which can help satisfy the cost requirement for LA. Then ideally, [Bege](#bege) is used to stack [Cavendish](#cav) into life, after which the last active DON!! is used to LA with. The mulligan is often decided based on whether such a play is feasible. However, it is important to keep the rest of the game in mind as well.

After [Cavendish](#cav) is established, the 2 extra DON!! obtained can be used to search more, play [1c Bonney](#1c-bonney), or swing taller with the leader.

If it is not possible to stack life, yet it is possible to gather a cumulative cost of 5 on the board before LA, it might be an option to “gamble”, meaning to LA blind and hope a 5c `Supernovas` body is on life.

#### 3.1.2. &nbsp; 5-DON!! Turns

##### 🡮 5d - Standard [Cavendish](#cav)
{:.no_toc}

<video src="playline-videos/5d.mp4" controls="controls" style="max-width: 100%;"></video>

Playing [Cavendish](#cav) first immediately satisfies the LA's cost requirement, so earlier searchers do not necessarily have to remain on the board. Ideally, life is then stacked using Bege with any 5c Supernova to be played out by LA afterwards, such that 2 5c 6k bodies are established in the same turn. This is one of the more obvious plays this deck offers. [Stunbon](#stunbon) and [Freezebon](#freezebon) are strong candidates. Which option is stronger depends on the situation.

This line is also playable during the 6d turn, in which an extra DON!! is available to search with before playing [Cavendish](#cav). Alternatively, [Cavendish](#cav) can be played out of [6c](#6c) instead, with the rest of the line naturally following.


#### 3.1.3. &nbsp; 6-DON!! Turns

##### 🡮 6d - Standard [6c](#6c)
{:.no_toc}

<video src="playline-videos/6d.mp4" controls="controls" style="max-width: 100%;"></video>

[6c](#6c) can be thought of as the equivalent of LA without needing to “spend” a life to play the extra body. Here, an entire turn is given as an example, before which the Turbo [Cavendish](#cav) line was successful. Similar to the [5d - Standard Cavendish](#-5d---standard-cavendish) playline, [Stunbon](#stunbon) and [Freezebon](#freezebon) are strong candidates to play from [6c](#6c). It is usually not recommended to play a body from life using LA again here, which might leave the player too vulnerable if a heal on the 8d turn is not guaranteed.


##### 🡮 6d - [6c](#6c) into [Cavendish](#cav)
{:.no_toc}

<video src="playline-videos/6d_6c_cav.mp4" controls="controls" style="max-width: 100%;"></video>

If [Cavendish](#cav) was not established during the 4d turn, it is usually played from [6c](#6c) during the 6d turn, after which [Stunbon](#stunbon) or [Freezebon](#freezebon) can still be stacked into life and played with LA. This idea is similar to [5d Standard](#5d-standard), except [Cavendish](#cav) is played from 6c. If [6c](#6c) is not in hand, or [Cavendish](#cav) needs to be active during the opponent's following turn, the turn can be played out as [5d - Standard Cavendish](#-5d---standard-cavendish).

##### 🡮 6d - Turbo
{:.no_toc}

<video src="playline-videos/6d_turbo.mp4" controls="controls" style="max-width: 100%;"></video>

Playing [Borsa](#borsa) from [6c](#6c) allows for LA to be used to play another body from life without going net down in life by the end of the turn, such that 3 bodies can safely be played in this singular turn. This effectively is a 19 or 20 DON!! play for the price of 6 DON!! and 0 life!

#### 3.1.4. &nbsp; 7-DON!! Turns

##### 🡮 7d - Standard [7c](#7c)
{:.no_toc}

<video src="playline-videos/7d.mp4" controls="controls" style="max-width: 100%;"></video>

This is one of the more “on curve” kinds of plays. [7c](#7c) is basically a “LA setup” card, as it heals a `Supernova` card into life and gives a rested DON!! card to the leader. By the end of the turn, the net life-loss is 0 if LA is used, which is beneficial, whilst establishing a 6k and a 9k body. This is a strong play against leaders which can grow taller, such as UY Nami, RP Roger, RY Bonney, etc.

#### 3.1.5. &nbsp; 8-DON!! Turns

##### 🡮 8d - Standard [FemLaw](#femlaw) into [6c](#6c)
{:.no_toc}

<video src="playline-videos/8d_femlaw_6c.mp4" controls="controls" style="max-width: 100%;"></video>

A fairly standard line utilising [FemLaw](#femlaw) and playing [6c](#6c) from it. Any previously discussed [6c](#6c) plays are applicable here. The benefit of playing [FemLaw](#femlaw) instead of playing any [6c](#6c) line is that [FemLaw](#femlaw) brings an extra `rush` swing and heals. This helps greatly with both offence and defence.

##### 🡮 8d - [FemLaw](#femlaw) into [6c](#6c) Replay
{:.no_toc}

<video src="playline-videos/8d_femlaw_6c_re.mp4" controls="controls" style="max-width: 100%;"></video>

6c can be used to replay an already established body, such as [Stunbon](#stunbon) or [Freezebon](#freezebon), to fire the `On-Play` effect again. One such way is by playing 8c, swinging with it and the body which is to be replayed, then playing [6c](#6c) from 8c, replaying said body. In principle, just playing a [6c](#6c) is sufficient to execute this idea, such that it is not necessary to have [Femlaw](#femlaw) to replay bodies with [6c](#6c). Playing [6c](#6c) through [Femlaw](#femlaw) heals a life and swings wider; however, sometimes it may be more beneficial to play [6c](#6c) raw as it costs less Don, such that larger swings can be produced.

##### 🡮 8d - Turbo
{:.no_toc}

<video src="playline-videos/8d_femlaw_6c_turbo.mp4" controls="controls" style="max-width: 100%;"></video>

This is essentially the same as the [6d - Turbo](#-6d---turbo) line after [6c](#6c) is played from 8c. 3 bodies can be established from this whilst gaining net life. It is also a way to double-heal if LA is not used. This line is only possible if the player has only 1 life remaining, since [Borsa](#borsa) can only heal when the player has 2 or fewer lives, and it is played from [6c](#6c) after [Femlaw](#femlaw) has already healed.

##### 🡮 8d - Standard [FemLaw](#femlaw) into [7c](#7c)
{:.no_toc}

<video src="playline-videos/8d_femlaw_7c.mp4" controls="controls" style="max-width: 100%;"></video>

This line is similar to the Standard [7c](#7c) line, except [7c](#7c) is played from [Femlaw](#femlaw) here, such that an extra `Rush` swing is generated and a life is healed. It is also possible to doubly heal with this line if LA were not to be used.

##### 🡮 8d - [6c](#6c) Replay
{:.no_toc}

<video src="playline-videos/8d_6c_re.mp4" controls="controls" style="max-width: 100%;"></video>

It may occur that the hand does not facilitate any good plays for the situation at hand, but the cards on the field do. In some cases, it may therefore be helpful to bounce a card such as [6c](#6c) back to hand using LA, before playing it out again and replaying another 5c Body such as [Stunbon](#stunbon) to fire its `On-Play` again. If a body needs to be stunned desperately, for instance, but no [Stunbon](#stunbon) nor any [6c](#6c) are in hand, this may be a viable play. Make sure to swing with any bodies before they are bounced back to hand.le play. Make sure to swing with any bodies before they are bounced back to hand.

##### 🡮 8d - [FemLaw](#femlaw) Pinch Replay
{:.no_toc}

<video src="playline-videos/8d_femlaw_pinch.mp4" controls="controls" style="max-width: 100%;"></video>

This is a similar idea to [6c](#6c) Replay. However, here the [6c](#6c) is played out from [Femlaw](#femlaw) after it is bounced to hand. This provides an extra `Rush` swing and heals a life in addition. This may be effective in a pinch, when a life needs to be healed, and a body needs to be stunned, whilst keeping some offensive pressure up.

#### 3.1.6. &nbsp; 10-DON!! Turns

##### 🡮 10d - [6c](#6c) Stun and Heal
{:.no_toc}

<video src="playline-videos/8d_6c_stun_heal.mp4" controls="controls" style="max-width: 100%;"></video>

This is an example of a fairly defensive turn. Even if tools such as [Stunbon](#stunbon) or [Borsa](#borsa) are not in hand, but are on the field alongside [Cavendish](#cav), [6c](#6c), and LA can be used to play 2 of them again. This is just an example that illustrates how tools can be used creatively together to try to satisfy the needs in the moment sufficiently. Many more creative lines are possible. "It's almost as if the book says, 'Here are the toys, now go and play'" ~Adam Neely (2018)[^adam-neely].

#### 3.1.7. &nbsp; Finishers

##### 🡮 12 DON!! Finisher
{:.no_toc}

<video src="playline-videos/fin_12d.mp4" controls="controls" style="max-width: 100%;"></video>

According to rule `6-5-5-4`, any DON!! given to a body is returned to the DON!! area rested if that body is bounced to hand, up to 2 of which can then be restood by [Cavendish](#cav) such that 2 extra DON!! become available to swing with[^comprehensive]. The most efficient use of this idea is when 2 DON!! are given to a body to swing with before that body is bounced to hand.and.

##### 🡮 Bounce and Stun
{:.no_toc}

<video src="playline-videos/fin_bounce_stun.mp4" controls="controls" style="max-width: 100%;"></video>

In a pinch, [Stunbon](#stunbon) can be bounced and played again to stun a `Blocker`. If [Cavendish](#cav) is still on the field, it functionally only costs 2 DON!! to stun a `Blocker`. The effectiveness of this lethal line depends on whether the opponent blocks the initial swing with [Stunbon](#stunbon).

##### 🡮 Free Extra Stun
{:.no_toc}

<video src="playline-videos/fin_stun_hody.mp4" controls="controls" style="max-width: 100%;"></video>

Bege can be used during lethal turns to stack into life a body that aids with the lethal. If there is a `Blocker` on the board, it can be stunned 'for free' this way after LA, since [Stunbon](#stunbon) restands a DON!! as well.

Pre-rotation, [Restand Law](#restand-law) was a popular choice to stack into life during lethal turns to cheaply restand [Cavendish](#cav) and swing incredibly efficiently. 

##### 🡮 Grab [Hody](#hody) or [DMG](#dmg)
{:.no_toc}

<video src="playline-videos/fin_grab_hody.mp4" controls="controls" style="max-width: 100%;"></video>

LA is used on most turns to bounce characters back to hand for various reasons, revealing life in the process. If [Hody](#hody) or [DMG](#dmg), for instance, are necessary for lethal, but are not in hand, yet one of them sits at the top of life, Bege can be used to grab it for 1 Don. This is another reason why having Bege in the late game can be helpful at times.

#### 3.1.8. &nbsp; Other

##### 🡮 Searcher Looping
{:.no_toc}

<video src="playline-videos/other_searcher_loop.mp4" controls="controls" style="max-width: 100%;"></video>

If a card is desperately needed, and a search does not find it, LA can be used to bounce the searcher, such that it can be played again to search deeper. 1c searchers are the most suitable due to the low cost committed to the searches. In principle, any card can be looped like this if necessary, and if there is enough DON!! available.le.

### 3.2. &nbsp; Matchup Strategies (OP15)

OP16 strategies are a work in progress.egies.

#### 3.2.1. &nbsp; P Enel

{% include optcg_card_inline.html id="OP15-058" side="right" %}

P Enel is one of the deck's toughest matchups. The large amount of early game swings, powerful Events that control the flow of the game, and the tall 6c Enels make it extremely difficult to defeat. Starving Enel is important to increasing the chance of survival. Swinging into the board over the lead should be prioritised since it always reduces tempo for the opponent.

<br clear="all">

{% include optcg_card_inline.html id="OP15-078" side="left" %}
{% include optcg_card_inline.html id="OP15-075" side="left" %}

The first obstacles to face are Enel's 0 cost events, specifically Mamaragan and El Thor. El Thor will KO the setup for the [Turbo Cavendish](#-4d---turbo-cavendish) line, and Mamaragan can rest a character to then swing into it. This makes Law's even curve rather difficult to pull off. It is therefore advised to go first. The odd curve allows for the [5d - Standard Cavendish](#-5d---standard-cavendish) line to be executed, which does not require any prior setup, as well as Enel's 6c drop to be delayed.

<br clear="all">

{% include optcg_card_inline.html id="OP05-077" side="right" %}

Around 5d/6d is when the next threat arises. El Thor in combination with Gamma Knife allows Enel to KO any body with 8000 power or less, with [Cavendish](#cav) as its prime target. Removal protection is very useful here. [1c Bonney](1c-bonney) should be used with caution, though. Enel may have multiple El Thor in hand, and taking several lives to protect [Cavendish](#cav) runs the risk of Enel switching up and swinging everything at lead. Gamma Knife can also be used in combination with Mamaragan to rest and easily swing into [Cavendish](#cav), or it can be frozen by Lightning Dragon after Kiten and Mamaragan.

<br clear="all">

{% include optcg_card_inline.html id="OP15-060" side="left" %}

Once the 6c Enels are played, Law has a better chance of success. It is an entire turn spent on a body that can easily be locked down by [Stunbon](#stunbon). `Blocker` Enels, especially, can come with this drawback for the opponent since a card is trashed to gain `Blocker`, which then is completely invalidated by a stun. Chaining [6c](#6c) into [Stunbon](#stunbon) is rather effective in preventing Enel from attempting lethal when the late-game is approached, while picking away at the opponent's life. [Hody](#hody) or [DMG](#dmg) are great for ensuring lethal, due to the prevalence of `Blocker` characters in Enel's deck (4c Franky, 4c Reiju, `Blocker` Enel, etc.).

<br clear="all">

#### 3.2.2. &nbsp; RU Lucy

{% include optcg_card_inline.html id="OP15-002" side="right" %}

Lucy, like Law, is a deck that thrives on high tempo. By removing the opponent's board through powerful events while drawing heavily, Lucy keeps up the tempo throughout the match. It is therefore rather important to have removal-protection and enough counters to protect the board when facing Lucy. Stunning and freezing the opponent's board is vital.

<br clear="all">

{% include optcg_card_inline.html id="OP10-045" side="left" %}

4c Cavendish is Lucy's main draw engine, and one of the deck's most vital pieces. Its `When Attacking` effect allows for the hand to be filtered and increased in size, which is vital for Lucy, as it runs a lot of events and bricks. It is therefore a prime target for attacks, removal and stuns. Even though Lucy typically has a large hand, its LA can not be used to protect characters, such that the amount of counter available to protect characters is lower than it seems.

<br clear="all">

{% include optcg_card_inline.html id="OP10-060" side="right" %}

Barrier-Barrier Pistol is a card that can doom GY Law very early on. Having [Cavendish](#cav) bottom-decked on 5d/6d immediately after it's played is devastating for the deck and will severely limit the amount of possible plays. Moreover, having searchers removed such that the [4d - Turbo Cavendish](#-4d---turbo-cavendish) line is denied is a large tempo loss. Removal-protection must be established before Lucy has the chance to use it. It can be triggered, too, so protection should always be established before swinging.

<br clear="all">

{% include optcg_card_inline.html id="OP15-046" side="left" %}

7c Sabo is one of Lucy's strongest pieces. It develops a tall `Blocker` that activates one of Lucy's very powerful Events, its 7c events in particular. Lucy wants to establish these on 7d and 9d to develop a strong field to use with 10c Roger, such that it is preferred for GY Law to go first. [Stunbon](#stunbon) should be used to deny Sabo from blocking and swinging, increasing the pressure on Lucy while reducing the potential for a clapback. Before Lucy is to be taken down to 0 life, it should be considered whether it is possible to survive 10c Roger. It might be more advantageous to swing at the board and stun what's left, and finish the game on the following turn. Hody or DMG are extremely useful in this MU because of Lucy's many `Blocker` characters in the endgame. 

<br clear="all">
{% include optcg_card_inline.html id="OP15-020" side="right" %}
{% include optcg_card_inline.html id="OP15-056" side="right" %}

<br clear="all">

#### 3.2.5. &nbsp; G Mihawk

{% include optcg_card_inline.html id="OP14-020" side="right" %}

Mihawk is a rather tricky deck to approach due to it essentially having 6k power, as Law is of `Slash` attribute, and a wide range of stunning and freezing options at its disposal. Its `Activate:Main` ability restands 3 DON!! every turn, always allowing Mihawk to use Events like [All Out](#all-out) and Electrical Luna, or keep DON!! available for counter events. Law's board is quite vulnerable to being frozen due to mostly employing and swinging with mid-cost characters, such that the board can easily be disabled if it's too exposed. Players might therefore have to consider whether it's worth it to swing with each character. It may sometimes be better to swing taller with fewer characters to spare one or a few from being frozen.

<br clear="all">

{% include optcg_card_inline.html id="OP14-033" side="left" %}

Early on, Mihawk focuses on getting various 5c characters out that can stun or freeze, such as Carrot, Perona or [Freezebon](#freezebon). These threats should be dealt with accordingly by KOing or stunning them. Note that Perona has a powerful `On K.O.` effect and might therefore not be a good attack target. Mihawk develops its board rather slowly, so putting a dent in it will slow them down considerably.

<br clear="all">

{% include optcg_card_inline.html id="OP14-027" side="right" %}

On 7d is when one of Mihawk's most imposing cards can be deployed: 7c Shanks. This *hulking* body can rest anything of 7000 Power or less when it is rested, thus by the opponent declaring an attack or when it is used for Mihawk's LA. It can target almost any body in GY Law, including `Blocker` characters, and to top it off, it also debuffs the entire board by 1000 Power when rested, such that most bodies in Law suddenly won't be able to swing without any DON!! attached. This makes Shanks a priority target, first and foremost for [Stunbon](#stunbon), which can neutralise its effect. Mihawk greatly benefits from playing Shanks, and later 9c Mihawk, on curve, which makes going first the best choice for Law. It may be strong to establish [7c](#7c) on 7d, such that it can swing into and possibly K.O. Shanks, allowing the rest of the board to swing into lead easily, and nullifying the opponent's prior turn if successful.

<br clear="all">

{% include optcg_card_inline.html id="OP14-119" side="left" %}

The next threat appears from 9d onwards: 9c Mihawk. The great stat line, the ability to stun almost every card in the game, and the option to pitch bricks for 2k counter make this card a true menace. It can easily shut down any big body or disable any `Blocker` characters when the opponent attempts lethal. While it isn't an eligible target for [Stunbon](#stunbon) due to its cost, it is rather vulnerable to being frozen by [Freezebon](#freezebon), which it can't punish. The `On Your Opponent's Attack` can be rather annoying, but Mihawk does run the risk of going low on cards in the late game. If this piece is played on curve, it will most often lead into [Law & Bepo](#lawpo) the following turn, making it very difficult to out. If the game reaches this point, the options depend on the board state. If Mihawk is low on life and a strong board remains, going for lethal might be the best choice before the opponent can deploy too many top-end pieces. If 2 or more lives remain, and 9c Mihawk stays on the field, swinging at life might be futile. If lethal isn't achieved within the same turn, the clapback will be very hard to counter. Instead, it should be considered whether it is possible to clean the opponent's board. Mihawk has several counter-events that only apply to leaders, such that the available counter for protecting the board might be fewer than it seems. If the opponent tries to swing at life in retaliation, there is the option of healing through [Femlaw](#femlaw) or [Borsa](#borsa). [Hody](#hody) and [DMG](#dmg) once again shine for closing out games due to being able to rest active DON!!, turning Mihawk's counter Events into bricks.

<br clear="all">

#### 3.2.3. &nbsp; UY Nami

{% include optcg_card_inline.html id="OP11-041" side="right" %}

Nami can be viewed as a pseudo-”7k” leader, since its `On Your Opponent's Attack` ability allows for a card to be pitched as counter, such that it gains +2k power for the rest of the turn. As such, this ability is typically activated during the first swing. Notably, a DON!! is required to be given to the leader for this effect, such that it is punishable either if the opponent is not able to give a Don, or if it is forgotten.

This ability significantly impacts which lines of play and swing patterns are effective. Since most of GY Law's bodies are of 6k power, it requires DON!! to be given to them to form effective swings. It is ideal to mostly swing for 7k power, as this does not commit too much DON!! to the swings, such that particular effective playlines are still possible, whilst always demanding counter from the opponent. As such, it is important to determine which swing pattern is the most effective balance between demanding counter from the opponent, and making effective playlines. If it is not possible to pressure life with each swing, it can still be effective to attack bodies of lower power with remaining lower swings, such as 4c Perona, which has 5k power, to pressure the opponent and demand some kind of compromise, be it in counter or resources on the field.

{% include optcg_card_inline.html id="OP14-111" side="left" %}

Speaking of Perona, it is a fairly dangerous card which often sees play either from hand or from its trigger. Most bodies in GY Law's deck are targets for its effect. It may, therefore, be intimidating to attack it because of its `On-K.O.` effect. However, this can be played around: Its `On-K.O.` ability is effectively useless if all the bodies the player intended to attack with have already swung. Attacking Perona with the last intended swing, after pressuring life, for instance, is therefore incredibly effective.

The player should also be wary of its trigger. Another Perona will likely be the target of the trigger if there is one in the trash, which typically results in a body of the player being stunned. Therefore, checking trash often during the game will be quite helpful, especially when attacking for lethal.

<br clear="all">

{% include optcg_card_inline.html id="OP11-106" side="right" %}

Note as well that UY Nami plays Zeus for removal. Critical cards such as Cavendish are vulnerable to this threat. It would therefore be favourable to have 1c Bonney in play to mitigate this threat.

UY Nami usually plays 'on-curve', that is, the player can expect the opponent to make particular plays on particular DON!! turns. It is recommended for players to study popular lists beforehand to make educated decisions for which targets to stun and when to freeze Don. Note that 5c Nami often isn't a threat since it is highly likely its conditions will not be fulfilled, as GY Law typically takes the first hit and uses a life to LA before 5c Nami can be played.

<br clear="all">

#### 3.2.4. &nbsp; RU Ace

{% include optcg_card_inline.html id="OP13-002" side="right" %}

As a deck with massive card draw and powerful endgame, RU Ace can be a tall task to overcome. The opponent's board can become quite overwhelming in the later stages of the game, so lethals are typically attempted sooner rather than later. The first part of the LA turns bricks into 2k counters, meaning the deck can run more bricks than usually comfortable. The second part allows Ace to draw a card once per turn when damaged or when a character with 6k base power or more is KO'd. This essentially means that 2 cards are added to the hand when a swing lands at the lead, which can quickly lead to ridiculously big hand sizes. It also means that a character being KO'd isn't as big a tempo loss since hand size goes up in exchange. Ace's most essential pieces are of an even cost, so going 2nd is the way to go for Law.

<br clear="all">

{% include optcg_card_inline.html id="PRB02-008" side="left" %}

The first character to take note of is 4c Marco. It's a Blocker with the `On K.O.` ability that draws 2 cards, which, in combination with the LA, draws a total of 3, an insane tempo gain. Luckily, Law has a couple of pieces to deal with this. First and foremost, [Stunbon](#stunbon), which prevents Marco from resting, and secondly, [3c Drake](#drake), which can rest 4c and below characters if the opponent has the same amount of life cards or more. When going 2nd, it isn't unusual to be down to 2 life at 4d (if the [4d - Turbo Cavendish](#-4d—turbo-cavendish) line succeeds), so this condition shouldn't be too hard to fulfil.

<br clear="all">

{% include optcg_card_inline.html id="OP08-047" side="right" %}

The next piece to be on the lookout for is 6c Jozu. It bounces one of Ace's own characters (most often a searcher or 1c Otama), meaning it is hand neutral, and then bounces a 6c or less. Its prime target is [Cavendish](#cav), such that it is of utmost importance to for removal-protection ro have been established before 6c Jozu can be played. Another way this threat can be dealt with is for [Freezebon](#freezebon) to freeze a don on 5d.

<br clear="all">

{% include optcg_card_inline.html id="EB04-007" side="left" %}

If it were possible to take 2nd, Ace will try to play 7c Zoro on 7d to become an 8k lead, making it very difficult to land a hit. Once again, [Freezebon](#freezebon) is the solution. If Zoro is prevented, Ace will be very vulnerable to aggression on 8d. 3 to 4 6k bodies should have been established at this point. The best choice here may be to just DON!! up and swing hard. With [Cavendish](#cav) on board, it is possible to utilise up to 10d for this purpose. Swinging 8 8 8 9, for example, would force Ace to take 1-2 lives and heavily go down in hand size. If 0 life is reached, lethal is possible on the next turn if [Hody](#hody) or [DMG](#dmg) are available. Ace is generally a slow deck, so a heavy clapback here is unlikely.

<br clear="all">

{% include optcg_card_inline.html id="OP13-042" side="right" %}
{% include optcg_card_inline.html id="ST22-015" side="right" %}

From 8d onwards, the big problems start to arise. The I am Whitebeard Event allows Ace to play a 10c Whitebeard on 8d/9d, essentially acting like some form of ramp. From here on out, Ace will just keep chaining Whitebeards until lethal is possible. 1 or 2 `Blocker` whitebeards are possible to deal with, but past that, it practically becomes impossible to break through and go for lethal. It is therefore most optimal to out before Ace's second 10d turn.

<br clear="all">

The second part of the Event allows Ace to take a life in exchange for gaining 2k power, and with a 12k `Blocker` simultaneously deployed, it's often impossible to meaningfully swing the following turn. This is why it is imperative for Ace's life to be reduced to 1 before this point. If the second part of the Event is activated here, Ace becomes vulnerable to [DMG](#dmg) and [Hody](#hody) since all remaining DON!! can be concentrated on a single swing. If [7c](#7c) has been deployed earlier, lethal becomes much more viable since [DMG](#dmg) can be followed up with a 17k swing. When Ace has built enough board, 10c Roger will often be deployed to ensure lethal, so players should be wary of this when reducing the opponent's life to 0.

<br clear="all">

#### 3.2.6. &nbsp; RG Luffy

{% include optcg_card_inline.html id="OP13-001" side="right" %}

On the surface, RG Luffy seems like an incredibly rough matchup. GY Law tends to swing with 6k power a lot, which RG Luffy can perfectly counter with DON!! using its LA. As a result, it can play more bricks and fewer 2k counter cards, however. Therefore, it is recommended to swing with 7k power if possible, as this asks a card from hand or an additional DON!! to be rested, the latter of which is more inefficient. Multiple such pokes can pressure the opponent. Take note whether a DON!! is given to the opponent's leader to begin with, as its LA requires one. If this is not the case, multiple pokes can put a lot of pressure on the opponent.

Take note of the number of active DON!! of the opponent before deciding to swing. It is quite ineffective to swing with bodies if those can fully be countered using Don, leaving them vulnerable to attacks or Electrical Luna.

<br clear="all">

{% include optcg_card_inline.html id="OP13-118" side="left" %}

The 6c Monkey.D.Luffy with `Double Attack` can be a serious threat, since GY Law can be rather fragile on Life. As such, it is quite effective to stun it using [Stunbon](#stunbon). [Freezebon](#freezebon) could also be used to deny this play altogether by freezing one of the opponent's DON!! for their 6d turn.

<br clear="all">

{% include optcg_card_inline.html id="OP14-022" side="right" %}

4c Usopp is a strong card in RG Luffy's arsenal. It will likely not swing if there is too much board pressure since it provides a lot of value with its `End of Your Turn` ability. If it does swing, it could be beneficial to attack it instead of the leader, as they are both 5k in power. It can be a large benefit if this card leaves the field.

<br clear="all">

{% include optcg_card_inline.html id="OP05-038" side="left" %}
The calculations for lethal are somewhat different from other matchups simply due to the combination of RG Luffy's LA and the 2c Charlestone event. It costs 2 to play, gives 4k counter power, and restands 3 Don. Blindly swinging for lethal without taking this card into account can destroy any chances of winning. To play around this card, a good understanding of the rules is required.

As of the moment of writing, rule `7-1` in the comprehensive rules dictates that any `On Your Opponent's Attack` effects (`7-1-1-3`) are processed before the counter step (`7-1-3`), meaning that the restood DON!! from Charlestone can not be reused by RG Luffy's LA to counter the same attack once it is played[^comprehensive]. Those DON!! can only be used again for the Next attack. This is the open window which will be exploited in the lethal calculation.

As such, the goal is essentially to produce a very large swing as the definitive lethal swing, since this renders Charlestone ineffective. The +4k counter power Charlestone provides is equivalent to the counter 2 DON!! can provide with the LA. This effectively turns Charlestone into a brick in hand, and likely another card as well, which would have been pitched to allow for 3 DON!! to be restood.

Therefore, the most effective strategy, assuming the opponent has no extra life or `Blocker` characters in play, is usually to poke them with 5k and 6k swings, demanding either counter from their hand or Don. When a sufficient amount of DON!! is rested, and counters are played from hand, a large swing with as much DON!! given as possible produces the best chance at achieving lethal, since RG Luffy tends to include more bricks and fewer 2k counter cards in the deck. While the pokes discourage the opponent from doing so, Charlestone may be used to counter one of them, which is one of the better plays the opponent actually has in this situation. It is up to the player to evaluate the number of pokes that can be dared before the lethal swing is made and avoid Charlestone from being played at all.

In some situations, when only 3 of the opponent's DON!! are active, it can also be effective to play either Hody or DMG to rest 2 DON!! such that Charlestone can not be played at all.


## Afterword

Hello, this is Amy speaking, or writing in this case. It's been a while in the making, hasn't it? I have felt compelled to write a guide for this leader for a while, ever since somewhere pre-rotation, since it's my favourite leader in the game ever since I started playing it in OP12, and many similar questions were, and still are, asked in the [`GY Law channel from the One Piece Trading Card Game Community` Discord server](https://discord.com/channels/950260529946050610/1373094217584345229). Instead of writing similar answers every time, I figured it would be nice if there were one central place, a reference, if you will, with answers to most of these questions. I never considered myself knowledgeable, skilled, and confident enough to commit the time to writing it, though. Then came rotation, after which the course of the deck was slightly altered, yet the fundamentals remained similar. I ended up learning a lot from and discussing with Shimona about the new strategies this deck employs. At some point, we figured it would be nice if we would make a list of turn-order preferences for multiple decks, which sparked my motivation again to write an article about this deck. I figured I couldn't do it alone, so I asked Shimona if she wanted to contribute as co-author, and that was the point at which she decided she would put up with the terrible project host that is me and co-author this article. I’m so sorry for being so chaotic and sporadic. I truly have a deep appreciation for everyone who contributed to this guide. Shimona and Swagzaur really filled lots of gaps in my knowledge for this work, and I hope I was able to do the same not only to them, but to the reader as well. My contributions were only part of the whole work. I sincerely hope it lives up to the quality standard everyone might have expected after so frequently talking about the process of writing this. Perhaps it's pretentious to write an afterword like this, so instead I'll say let's all become better GY Law players!


## Useful Links

- **[OPTCGLab Lethal Calculator](https://optcglab.com/)**<br>
Valuable tool with which the most optimal lethal swings can be calculated and analysed.

- **[Hypergeometric Distribution Probability Calculator](https://stattrek.com/online-calculator/hypergeometric)**<br>
Tool which calculates the probability of drawing some number of successes in a sample of a population, useful for educated decision-making during the deckbuilding process.

- **[gumgum.gg](http://gumgum.gg)**<br>
Decklist database for competitive decks.

- **[*Heart Pirates* Discord Server](https://discord.gg/HHwyfH5fN6)**<br>
Community dedicated to Law leaders.

- **[*One Piece Card Game Community* Discord Server](https://discord.gg/hD5uuYtYsp)**<br>
General community with channels dedicated to each leader. The `#🟢🟡op10-law` channel is home to many of the discussions which led to the creation of this article.


## Glossary

|Term|Description|
|:-|:-|
|\#c|# cost card.|
|\#d|# DON!! turn.|
|Body|Character card.|
|Bouncing|Returning a character card from the board to hand.|
|Cheating out|Playing a card without paying its full cost.|
|Chump `Blocker`|A low-cost, low-power `Blocker`.|
|Clapback|The large wave of attacks from the opponent after a lethal attempt|
|Firing|Activating an ability.|
|Freezing|Restricting a rested card from restanding at the start of the next turn.|
|Healing|Adding a card to life.|
|LA|Leader Ability.|
|Lethal|A set of attacks or a turn which aims to win the game through damage.|
|Looping|Returning a character card to hand and playing it again.|
|MU|Matchup.|
|Out|Any means possible to win the game.|
|Pieces|Cards.|
|Raw playing|Playing a card from hand by paying its base cost.|
|Removal Protection|Characters which use a replacement effect to prevent another character from being removed by effects.|
|Restanding|Setting a rested card as active.|
|Stacking|Taking then placing a life to and from hand.|
|Stat line|Cost to power ratio.|
|Stunning|Preventing a body from resting or attacking.|
|Swinging|Attacking with a character or Leader card.|
|Tall|High amount of power.|
|Tempo|An advantage of resources in time compared to the opponent.|
|Whiff|A search without a legal target in its options.|
|Wide|Many bodies.|
 of power.|
|Tempo|An advantage of resources in time compared to the opponent.|
|Whiff|A search without a legal target in its options.|
|Wide|Many bodies.|

## Bibliography

[^hypersource]: David M. Lane et al., *Introduction to Statistics*. Accessed: Jun. 17, 2026. [Online]. Available: [https://onlinestatbook.com/Online_Statistics_Education.pdf](https://onlinestatbook.com/Online_Statistics_Education.pdf)
[^hypercalc]: 'Hypergeometric Distribution Probability Calculator'. Accessed: Jun. 17, 2026. [Online]. Available: [https://stattrek.com/online-calculator/hypergeometric](https://stattrek.com/online-calculator/hypergeometric)
[^adam-neely]: Adam Neely, *The 5 Music Theory/Composition Books That Most Influenced Me*, (Jun. 04, 2018). Accessed: Jun. 14, 2026. [Online Video]. Available: [https://www.youtube.com/watch?v=dbabDhGZAhM](https://www.youtube.com/watch?v=dbabDhGZAhM)
[^comprehensive]: 'Comprehensive Rules'. Bandai, Jan. 16, 2026. Accessed: Jun. 16, 2026. [Online]. Available: [https://en.onepiece-cardgame.com/pdf/rule_comprehensive.pdf?20260116](https://en.onepiece-cardgame.com/pdf/rule_comprehensive.pdf?20260116)
[^skepaslist]: George Skeparnides [@SkepasG], (Apr. 25, 2026). X/Twitter. Accessed: Jun. 17, 2026. [Online]. Available: [https://x.com/SkepasG/status/2048057113025372582/photo/1](https://x.com/SkepasG/status/2048057113025372582/photo/1).
<!-- [^skepaslist]: George Skeparnides [@SkepasG]. *"Ended up 2nd place in a store regional with GY Law! Matchups: R1 Lucy W R2 UY Nami W R3 Yellow Enel W R4 Purple Enel L (mulligan into no play until 5 DON!! and was still a close game) R5 Ace W #optcg #onepiecetcg"*, (Apr. 25, 2026). X/Twitter. Accessed: Jun. 17, 2026. [Online]. Available: [https://x.com/SkepasG/status/2048057113025372582/photo/1](https://x.com/SkepasG/status/2048057113025372582/photo/1). -->
