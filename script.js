'use strict';

document.addEventListener('DOMContentLoaded', function () {

    const buttons = document.querySelectorAll('.toggleButton');
    const toggleAllButton = document.querySelector('.toggleAllButton');
    let allOpen = false;

    /* 処理順の関係で最初の部分にも（最後にも同様の部分がある）ボタンの動作について書かないと[通常のボタン]が動作しない？ */

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const content = this.parentElement.nextElementSibling;
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                this.textContent = '- PUSH';
            } else {
                content.style.display = 'none';
                this.textContent = '+ PUSH';
            }
        });
    });

    if (toggleAllButton) {
        toggleAllButton.addEventListener('click', function (e) {
            e.preventDefault();
            allOpen = !allOpen;
            buttons.forEach(function (button) {
                const content = button.parentElement.nextElementSibling;
                if (allOpen) {
                    content.style.display = 'block';
                    button.textContent = '- PUSH';
                } else {
                    content.style.display = 'none';
                    button.textContent = '+ PUSH';
                }
            });
            this.textContent = allOpen ? '- ALL' : '+ ALL';
        });
    }

    var buttonSections = [
        `<section class="button-section">
            <h2>赧める</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>赧める（あからめる）</p>
                <p>恥ずかしくて顔を赤くする。赤面する。</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>羹</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>羹（あつもの）</p>
                <p>野菜や肉を入れて煮た、こくのある熱い吸い物。</p>
                <p>【羹に懲りて膾を吹く】</p>
                <p>一度の失敗に懲りて、いらぬ心配をするたとえ。「膾」は酢で味付けした冷たい食べ物。熱い吸い物で口をやけどした者は、冷たい膾まで吹いてさましてから食べるという意から。〈『楚辞』〉</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>漁り</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>漁り（いさり）</p>
                <p>魚介類をとること。漁をすること。すなどり。あさり。「—船」</p>
                <p>>「真午の海に浮かんだ—火と似た炎に」〈米津玄師「海と山椒魚」〉</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>嘶く</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>嘶く（いななく）</p>
                <p>ウマが声高く鳴く。「牛が—き馬が吼える」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>燻す</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>燻す（いぶす）</p>
                <p>①炎を出さず煙が出るように燃やす。けむらせる。「蚊遣りで木片を—す」</p>
                <p>②すすなどで黒くする。</p>
                <p>③硫黄などを燃やして金属にくもりをつける。</p>
                <p>————————</p>
                <p>燻ぶる（くすぶる）</p>
                <p>①炎が燃え出さずに、けむる。「火が—る」</p>
                <p>②すすける。すすで黒くなる。</p>
                <p>③家にこもって、することもなく暮らす。「一日中家で—っている」</p>
                <p>④問題が表面化せず、はっきりと解決されないまま内部に残っている。「人事問題が社内に—る」「軍事衝突の火種が—る」</p>
                <p>————————</p>
                <p>燻らす（くゆらす）</p>
                <p>煙をゆるやかに立てる。くゆらせる。「葉巻を—す」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>菲い</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>菲い（うすい）</p>
                <p>手軽で粗末なさま。品質や程度があまり良くない。</p>
                <p>>「私の徳など—いものでして、とへりくだった」</p>
                <p>————————</p>
                <p>菲しい（かんばしい）</p>
                <p>————————</p>
                <p>澆い（うすい）</p>
                <p>愛情の程度が弱い。人情が希薄である。</p>
                <p>[対義語]淳い（あつい）</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>舂く</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>うすづく（㫪く／臼搗く）《「うすつく」とも》</p>
                <p>1 穀物などを臼に入れて、杵(きね)でつく。「麦を—・く」</p>
                <p>2《日が沈む意もある「舂(しょう)」を訓読みにした語》夕日がまさに没しようとする。</p>
                <p>「西に—・きだすと日あしはどんどん歩みを早める」〈有島・生れ出づる悩み〉</p>
                <p>出典：『デジタル大辞泉』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>蹲る</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>蹲る（うずくまる）</p>
                <p>①しゃがんでひざを曲げ、体を小さく丸くする。「めまいを起こして道端に—る」</p>
                <p>②動物が前足をそろえ、折り曲げてすわる。「犬が—って眠る」</p>
                <p>————————</p>
                <p>踞る（うずくまる）</p>
                <p>ひざを曲げ、体をかがめてしゃがむ。「石畳の上に—る」「急な腹痛でその場に—る」</p>
                <p>————————</p>
                <p>蹲う（つくばう）</p>
                <p>うずくまる。しゃがむ。「地面に這い—って謝る」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
                <p>備考：『デジタル大辞泉』では「蹲る」と「踞る」は一致</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>嘯く</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>嘯く（うそぶく）</p>
                <p>①とぼけて知らないさまを装う。「私は知らないと—く」</p>
                <p>②おおげさなことや偉そうなことを言う。大言壮語する。「独力でなし遂げた手柄と—く」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>懿しい</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>懿しい（うるわしい）</p>
                <p>りっぱである。すぐれている。整っていてよい。</p>
                <p>————————</p>
                <p>懿い（よい）</p>
                <p>充実していて満足できる。りっぱである。</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>昃く</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>昃く（かたむく）（仄く）</p>
                <p>日が西方に沈みかける。「日は—きて陰を停むる無し」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>耘る</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>耘る（くさぎる）</p>
                <p>田や畑の草を取る。除草する。</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>麾く</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>麾く（さしまねく）</p>
                <p>手で指示をする。手で合図して指揮をとる。「家来を—く」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>浚う</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>浚う（さらう）（濬う）</p>
                <p>①溝などの底にある土砂をすっかりすくい取る。</p>
                <p>②他人の物を奪い取る。「人々の膏血を—う」</p>
                <p>————————</p>
                <p>渫う（さらう）</p>
                <p>水底の土砂やごみなどを取り除く。「どぶを—う」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
                <p>備考：『デジタル大辞泉』では「浚う」と「渫う」は一致</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>諜る</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>諜る（さぐる）</p>
                <p>敵のようすをさぐる。「諜報」</p>
                <p>>「被疑者を二週間にかけ—ったがボロは一向に出ない」</p>
                <p>出典：『デジタル大辞泉』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>荐りに</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>荐りに（しきりに）</p>
                <p>重ね重ね。しばしば。「—催促されている」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>認める（×みとめる）</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>認める（したためる）</p>
                <p>①書き記す。「手紙を—める」</p>
                <p>②食事をする。「夕飯を—める」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>遁み</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>遁み（しりごみ）</p>
                <p>あとずさりする。「遁巡」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>吝い</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>吝い（しわい）</p>
                <p>けちである。しみったれている。ものおしみする性質である。</p>
                <p>>「まじあいつ—いわ～」</p>
                <p>————————</p>
                <p>吝しむ（おしむ）</p>
                <p>ものおしみする。しぶる。けちけちする。</p>
                <p>————————</p>
                <p>吝か（やぶさか）（悋か）</p>
                <p>①ものおしみするさま。けちなさま。</p>
                <p>②未練なさま。ためらうさま。</p>
                <p>③「…に—でない」の形で、…する努力をおしまない。「手助けするに—でない」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>堰く</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>堰く（せく）</p>
                <p>①流れをさえぎる。「川を—きとめる」</p>
                <p>②物事や人の間を隔てる。特に、男女の間をさえぎって会えないようにする。「思いが—かれてさらに募る」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>跼る</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>跼る（せぐくまる）</p>
                <p>体をまげてちぢこませる。背を丸くしてかがむ。</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>湛える</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>湛える（たたえる）</p>
                <p>①器などを液体でいっぱいにする。水を満たす。「プールに水を—える」</p>
                <p>②感情を顔に出す。「満面に笑みを—える」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>霾る</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>霾る（つちふる）（土降る）</p>
                <p>黄砂が降る。</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>亨る</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>亨る（とおる）</p>
                <p>支障なく行われる。思い通りに順調に運ぶ。</p>
                <p>>「いまのところ文化祭は—っている」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>疏る</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>疏る（とおる）（疎る）</p>
                <p>水などの流れが通じる。ふさがりが分け離れ、通じるようになる。</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>腥い</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>腥い（なまぐさい）</p>
                <p>①生肉のにおいのするさま。</p>
                <p>②生々しく世俗的であるさま。</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>淬ぐ</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>淬ぐ（にらぐ）（焠ぐ）</p>
                <p>焼いた刀をさっと水に入れて、きたえる。焼きを入れる。</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>嚔る</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>嚔る（はなひる）</p>
                <p>くしゃみをする。</p>
                <p>>「縁側でひとり—る休日」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>粥ぐ</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>粥ぐ（ひさぐ）</p>
                <p>物を売って商売をする。「駄菓子やおもちゃを—ぐ店」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>恢い</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>恢い（ひろい）</p>
                <p>中があいていて大きい。志が大きい。また、心がひろい。</p>
                <p>>「彼女は—い人物だ」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>篩</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>篩（ふるい）</p>
                <p>枠の底に網を張り、振り動かして、粉や粒を粗いものと細かいものとにより分ける道具。「砂を—に掛ける」</p>
                <p>————————</p>
                <p>篩う（ふるう）</p>
                <p>①ふるいに掛けてより分ける。</p>
                <p>②選抜する。「試験で—う」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>諂う</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>諂う（へつらう）</p>
                <p>気に入られようと機嫌をとる。こびる。おもねる。「権力者に—う」</p>
                <p>————————</p>
                <p>諛う（へつらう）</p>
                <p>相手に気に入られるよう、言葉で機嫌をとる。言葉でこびる。「上司に—う」「親が子に—う」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
                <p>備考：『デジタル大辞泉』では「諂う」と「諛う」は一致</p>
                <p>————————</p>
                <p>倖う（へつらう）</p>
                <p>出典：『漢字ペディア』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>屠る</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>屠る（ほふる）</p>
                <p>①鳥獣の体を切り裂く。「羊を—る」</p>
                <p>②みなごろしにする。</p>
                <p>③敵を打ち破る。「大関を—る」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>薨る</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>薨る（みまかる）</p>
                <p>昔、皇族や三位以上の人が死ぬ。薨去する。「死ぬ」の尊敬語。</p>
                <p>「関白は病に臥して—った」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>邀える</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>邀える（むかえる）</p>
                <p>相手の攻撃を待ち受けて、さえぎり止める。</p>
                <p>>「魔王のビームを—えて姫様を守った」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>咽ぶ</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>咽ぶ（むせぶ）</p>
                <p>①飲食物や煙などで息がつまりそうになる。</p>
                <p>②感情がこみ上げて声がつまる。「あまりの嬉しさに涙に—ぶ」</p>
                <p>③風や水の音が激しく泣くように聞こえる。</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>盲いる</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>盲いる（めしいる）</p>
                <p>視力を失う。目が見えなくなる。</p>
                <p>「お夏の—・いた目の前には」〈白鳥・牛部屋の臭ひ〉</p>
                <p>出典：『デジタル大辞泉』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>嬾い</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>嬾い（ものうい）（懶い）</p>
                <p>心がはれやかでない。何をするにもおっくうで、気が進まない。憂鬱で気が晴れない。「—曇り日の昼下がり」</p>
                <p>————————</p>
                <p>懶い（ものぐさい）</p>
                <p>①物事をするのが、なんとなく気が進まない。わずらわしく、おっくうである。「寒くて何をするのも—い」</p>
                <p>②体がだるく、気分がすぐれない。</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
        `<section class="button-section">
            <h2>憔れる</h2>
            <div class="btn-wrap">
                <a href="#" class="btn btn-border-shadow toggleButton">+ PUSH</a>
            </div>
            <div class="toggle-content" style="display: none;">
                <p>憔れる（やつれる）（悴れる）</p>
                <p>（「悴れる」と同義と見做す）</p>
                <p>疲れて体がやせ、気力が衰える。「心労が重なって—れる」「入院生活ですっかり—れた」</p>
                <p>出典：『漢検 漢字辞典（第二版）』</p>
            </div>
        </section>`,
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(buttonSections);

    var randomButtonSections = buttonSections.slice(0, 5);

    var quizContainer = document.getElementById('quiz-container');
    randomButtonSections.forEach(function (section) {
        quizContainer.innerHTML += section;
    });

/* 処理順の関係でもう一度ボタンの動作について書かないと[ランダム生成したボタン]が動作しない？ */

    const newButtons = document.querySelectorAll('.toggleButton');

    newButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const content = this.parentElement.nextElementSibling;
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                this.textContent = '- PUSH';
            } else {
                content.style.display = 'none';
                this.textContent = '+ PUSH';
            }
        });
    });

    const reloadButton = document.querySelector('.reloadButton');
    if (reloadButton) {
        reloadButton.addEventListener('click', function (e) {
            e.preventDefault();
            location.reload();
        });
    }
});