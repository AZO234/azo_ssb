// button type
const AZO_SSB_BTNT_NOTHING = 0;
const AZO_SSB_BTNT_ICON = 1;
const AZO_SSB_BTNT_LABEL = 2;
const AZO_SSB_BTNT_ICON_LABEL = 3;
const AZO_SSB_BTNT_ICON_LABEL_NL = 4;

// button
const AZO_SSB_BTN_SPC = 0;
const AZO_SSB_BTN_TWITTER = 1;
const AZO_SSB_BTN_FACEBOOK = 2;
const AZO_SSB_BTN_HATENA = 3;
const AZO_SSB_BTN_TUMBLR = 4;
const AZO_SSB_BTN_POCKET = 5;
const AZO_SSB_BTN_LINKEDIN = 6;
const AZO_SSB_BTN_EVERNOTE = 7;
const AZO_SSB_BTN_BUFFER = 8;
const AZO_SSB_BTN_BLOGGER = 9;
const AZO_SSB_BTN_MIXI = 10;
const AZO_SSB_BTN_GBOOKMARK = 11;
const AZO_SSB_BTN_PINTEREST = 12;
const AZO_SSB_BTN_DIGG = 13;
const AZO_SSB_BTN_FLIPBOARD = 14;
const AZO_SSB_BTN_INSTAPAPER = 15;
const AZO_SSB_BTN_QQ = 16;
const AZO_SSB_BTN_KAKAO = 17;
const AZO_SSB_BTN_ONENOTE = 18;
const AZO_SSB_BTN_KNOWN = 19;
const AZO_SSB_BTN_MYSPACE = 20;
const AZO_SSB_BTN_ODNOKLASSNIKI = 21;
const AZO_SSB_BTN_VKONTAKTE = 22;
const AZO_SSB_BTN_XING = 23;
const AZO_SSB_BTN_YUMMLY = 24;
const AZO_SSB_BTN_REDDIT = 25;
const AZO_SSB_BTN_QZONE = 26;
const AZO_SSB_BTN_LINE = 27;
const AZO_SSB_BTN_HANGOUT = 28;
const AZO_SSB_BTN_WHATSAPP = 29;
const AZO_SSB_BTN_FBMESSAGE = 30;
const AZO_SSB_BTN_SKYPE = 31;
const AZO_SSB_BTN_TELEGRAM = 32;
const AZO_SSB_BTN_RENREN = 33;
const AZO_SSB_BTN_WEIBO = 34;
const AZO_SSB_BTN_VIBER = 35;
const AZO_SSB_BTN_AMAZON_WL = 90;
const AZO_SSB_BTN_PRINTFRIENDLY = 100;
const AZO_SSB_BTN_GMAIL = 110;
const AZO_SSB_BTN_RSS = 120;
const AZO_SSB_BTN_FEEDLY = 121;
const AZO_SSB_BTN_INOREADER = 122;
const AZO_SSB_BTN_SMS = 130;
const AZO_SSB_BTN_EMAIL = 131;
const AZO_SSB_BTN_LINKCOPY = 132;
const AZO_SSB_BTN_BOOKMARK = 133;
const AZO_SSB_BTN_PRINT = 134;
const AZO_SSB_BTN_OTHER = 150;

var azo_ssb_static = {};

// azo_ssb home directory (must http:// or https:// first / must slash(/) end / empty to debug)
var azo_ssb_home = '';

function azo_ssb_preinit() {
  azo_ssb_static.locale = navigator.language || navigator.userLanguage;
  azo_ssb_static.lang = azo_ssb_static.locale.split('-')[0];

  var metas = document.getElementsByTagName('meta');
  var links = document.getElementsByTagName('link');

  azo_ssb_static.hashtag = '';
  for(var i = 0; i < metas.length; i++) {
    var meta = metas[i];
    if(meta.getAttribute('property') == 'article:tag') {
      if(azo_ssb_static.hashtag == '') {
        azo_ssb_static.hashtag = meta.getAttribute('content');
      }
    }
  }

  azo_ssb_static.description = '';
  for(var i = 0; i < metas.length; i++) {
    var meta = metas[i];
    if(meta.getAttribute('property') == 'og:description') {
      if(azo_ssb_static.description == '') {
        azo_ssb_static.description = meta.getAttribute('content');
      }
    }
  }

  azo_ssb_static.image = '';
  for(var i = 0; i < metas.length; i++) {
    var meta = metas[i];
    if(meta.getAttribute('property') == 'og:image') {
      if(azo_ssb_static.image == '') {
        azo_ssb_static.image = meta.getAttribute('content');
      }
    }
  }

  azo_ssb_static.rss = '';
  for(var i = 0; i < links.length; i++) {
    var link = links[i];
    if(link.getAttribute('rel') == 'alternate') {
      if(
        link.getAttribute('type') == 'application/rss' ||
        link.getAttribute('type') == 'application/rss+xml' ||
        link.getAttribute('type') == 'application/xml+rss' ||
        link.getAttribute('type') == 'application/rdf' ||
        link.getAttribute('type') == 'application/rdf+xml' ||
        link.getAttribute('type') == 'application/xml+rdf' ||
        link.getAttribute('type') == 'application/atom' ||
        link.getAttribute('type') == 'application/atom+xml' ||
        link.getAttribute('type') == 'application/atomcat+xml' ||
        link.getAttribute('type') == 'application/atomsvc+xml' ||
        link.getAttribute('type') == 'application/xml+atom' ||
        link.getAttribute('type') == 'application/xml+atomcat' ||
        link.getAttribute('type') == 'application/xml+atomsvc'
      ) {
        if(azo_ssb_static.rss == '') {
          azo_ssb_static.rss = link.getAttribute('href');
        }
      }
    }
  }

  azo_ssb_static.twitter_site = '';
  for(var i = 0; i < metas.length; i++) {
    var meta = metas[i];
    if(meta.getAttribute('property') == 'twitter:site') {
      if(azo_ssb_static.twitter_site == '') {
        azo_ssb_static.twitter_site = meta.getAttribute('content');
      }
    }
  }

  azo_ssb_static.twitter_creator = '';
  for(var i = 0; i < metas.length; i++) {
    var meta = metas[i];
    if(meta.getAttribute('property') == 'twitter:creator') {
      if(azo_ssb_static.twitter_creator == '') {
        azo_ssb_static.twitter_creator = meta.getAttribute('content');
      }
    }
  }

  azo_ssb_static.twitter_account_follow = '';
  var res = /^@(.+)/.exec(azo_ssb_static.twitter_site);
  if(res) {
    if(res[1] != '') {
      azo_ssb_static.twitter_account_follow = res[1];
     }
  }
  res = /^@(.+)/.exec(azo_ssb_static.twitter_creator);
  if(res) {
    if(res[1] != '') {
      if(azo_ssb_static.twitter_account_follow != '') {
        azo_ssb_static.twitter_account_follow += ',';
      }
      azo_ssb_static.twitter_account_follow += res[1];
    }
  }

  azo_ssb_static.facebook_appid = '';
  for(var i = 0; i < metas.length; i++) {
    var meta = metas[i];
    if(meta.getAttribute('property') == 'fb:app_id') {
      if(azo_ssb_static.facebook_appid == '') {
        azo_ssb_static.facebook_appid = meta.getAttribute('content');
      }
    }
  }

  // Facebook appid (if <meta property="fb:app_id" content="(appid)"> set, blank OK / to get appid at https://developers.facebook.com/ and set correct domain)
  var facebook_appid = '';
  if(facebook_appid != '') {
    azo_ssb_static.facebook_appid = facebook_appid;
  }
}

function azo_ssb_head() {
  // css
  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = azo_ssb_home + 'azo_ssb.css';
  document.getElementsByTagName('head')[0].appendChild(css);
}

function azo_ssb_top() {
  // Facebook
  window.fbAsyncInit = function() {
    FB.init({
      appId            : azo_ssb_static.facebook_appid,
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v3.2'
    });
  };
  var script_facebook_script = document.createElement('script');
  script_facebook_script.id = 'facebook-jssdk';
  script_facebook_script.src = 'https://connect.facebook.net/' + azo_ssb_static.locale + '/sdk.js';
  var div = document.createElement('div');
  var body = document.getElementsByTagName('body')[0];
  if(body.children) {
    body.insertBefore(script_facebook_script, body.children[0]);
  } else {
    body.appendChild(script_facebook_script);
  }
}

function azo_ssb_bottom() {
//    document.getElementsByTagName('body').appendChild(div_facebook.children[0]);
}

if(typeof azo_ssb === 'undefined') { var azo_ssb = function(setting) {
  if(!(this instanceof azo_ssb)) {
    return new azo_ssb(setting);
  }

  this.setting = setting;

  var table = document.createElement('table');
  table.className = 'azo_ssb_' + this.setting.name;
  document.write(table.outerHTML);
  var elms = document.getElementsByClassName(table.className);
  for(var i = 0; i < elms.length; i++) {
    if(elms[i].tagName == 'TABLE') {
      this.table = elms[i];
      break;
    }
  }

  var div = document.createElement('div');
  div.className = 'azo_ssb_modal_' + this.setting.name;
  document.write(div.outerHTML);
  var elms = document.getElementsByClassName(div.className);
  for(var i = 0; i < elms.length; i++) {
    if(elms[i].tagName == 'DIV') {
      this.modaldiv = elms[i];
      break;
    }
  }
  this.modaldiv.azo_ssb = this;
};}

azo_ssb.prototype.copy_link = function() {
  var copyFrom = document.createElement('textarea');
  copyFrom.textContent = this.title + '\n' + this.URL;
  var bodyElm = document.getElementsByTagName('body')[0];
  bodyElm.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  bodyElm.removeChild(copyFrom);
};

azo_ssb.prototype.add_favorite = function() {
  if('addToHomescreen' in window && addToHomescreen.isCompatible) {
    addToHomescreen({ autostart: false, startDelay: 0 }).show(true);
  } else if(window.sidebar) {
    window.sidebar.addPanel(this.title, this.URL, '');
  } else if(document.all) {
    window.external.AddFavorite(this.URL, this.title);
  } else {
    if(azo_ssb_static.lang == 'ja') {
      alert('ご利用のブラウザでは、Ctrl+D でブックマークを追加してください。');
    } else {
      alert('To add bookmark, press Ctrl+D .');
    }
  }
};

azo_ssb.prototype.init = function() {
  /* === user setting start === */

  // --- azo_ssb Common

  // hashtag (omit hash)
  this.hashtag = '';
  // description (if <meta property="og:description" content="(description)"> set, blank OK)
  this.description = '';
  // image (must http:// or https:// first / if <meta property="og:image" content="(image URL)"> set, blank OK)
  this.image = '';
  // RSS feed (must http:// or https:// first)
  this.rss = '';

  // --- Twitter

  // Twitter hashtags (omit hash / prior to common)
  this.twitter_hashtag = '';
  // Twitter account (for via / omit atmark)
  this.twitter_account_via = '';
  // Twitter account (for follow / omit atmark)
  this.twitter_account_follow = '';

  // name
  this.twitter_name = 'Twitter';

  // tweet
  this.twitter_tweet = 'tweet';
  if(azo_ssb_static.lang == 'ja') {
    this.twitter_tweet = 'ツイート';
  }

  // --- Facebook share

  // Facebook hashtags (omit hash / prior to common)
  this.facebook_hashtag = '';

  // name
  this.facebook_name = 'Facebook';

  // share
  this.facebook_share = 'share';
  if(azo_ssb_static.lang == 'ja') {
    this.facebook_share = 'シェア';
  }

  // --- Hatena

  // name
  if(azo_ssb_static.lang == 'ja') {
    this.hatena_name = 'はてな';
  } else {
    this.hatena_name = 'Hatena';
  }

  // bookmark
  this.hatena_bookmark = 'bookmark';
  if(azo_ssb_static.lang == 'ja') {
    this.hatena_bookmark = 'ブックマーク';
  }

  // --- Tumbler

  // name
  this.tumblr_name = 'Tumblr';

  // share
  this.tumblr_share = 'share';
  if(azo_ssb_static.lang == 'ja') {
    this.tumblr_share = 'シェア';
  }

  // --- Pocket

  // name
  this.pocket_name = 'Pocket';

  // pocket
  this.pocket_pocket = 'share';
  if(azo_ssb_static.lang == 'ja') {
    this.pocket_pocket = 'ポケット';
  }

  // --- LINE

  // name
  this.line_name = 'LINE';

  // send
  this.line_send = 'send';
  if(azo_ssb_static.lang == 'ja') {
    this.line_send = '送る';
  }

  // --- mixi

  // name
  this.mixi_name = 'mixi';

  // to get key at http://developer.mixi.co.jp/
//  this.mixi_key = '';

  // check
  this.mixi_check = 'check';
  if(azo_ssb_static.lang == 'ja') {
    this.mixi_check = 'チェック';
  }

  // --- Google bookmarks

  // name
  this.gbookmark_name = 'Google bookmarks';

  // bookmark
  this.gbookmark_bookmark = 'bookmark';
  if(azo_ssb_static.lang == 'ja') {
    this.gbookmark_bookmark = 'ブックマーク';
  }

  // --- Evernote

  // name
  this.evernote_name = 'Evernote';

  // clip
  this.evernote_clip = 'clip';
  if(azo_ssb_static.lang == 'ja') {
    this.evernote_clip = 'クリップ';
  }

  // --- Google Hangouts

  // name
  this.hangout_name = 'Google Hangouts';

  // send
  this.hangout_send = 'send';
  if(azo_ssb_static.lang == 'ja') {
    this.hangout_send = '送る';
  }

  // --- WhatsApp

  // name
  this.whatsapp_name = 'WhatsApp';

  // send
  this.whatsapp_send = 'send';
  if(azo_ssb_static.lang == 'ja') {
    this.whatsapp_send = '送る';
  }

  // --- Weibo

  // name
  this.weibo_name = 'Weibo';

  // share
  this.weibo_share = 'share';
  if(azo_ssb_static.lang == 'ja') {
    this.weibo_share = '共有';
  }

  // --- Facebook message

  // to get appid at https://developers.facebook.com/
  this.facebook_msg_appid = '';

  // name
  this.facebook_msg_name = 'Facebook message';

  // share
  this.facebook_msg_send = 'send';
  if(azo_ssb_static.lang == 'ja') {
    this.facebook_msg_send = '送る';
  }

  // --- Pinterest

  // media URL
  this.pinterest_media_url = '';

  // name
  this.pinterest_name = 'Pinterest';

  // pin it
  this.pinterest_pinit = 'Pin-it';
  if(azo_ssb_static.lang == 'ja') {
    this.pinterest_pinit = '保存';
  }

  // --- Linkedin

  // name
  this.linkedin_name = 'Linkedin';

  // share
  this.linkedin_share = 'share';
  if(azo_ssb_static.lang == 'ja') {
    this.linkedin_share = '共有';
  }

  // --- Reddit

  // name
  this.reddit_name = 'Reddit';

  // post
  this.reddit_post = 'post';
  if(azo_ssb_static.lang == 'ja') {
    this.reddit_post = '投稿';
  }

  // --- Telegram

  // name

  this.telegram_name = 'Telegram';

  // share
  this.telegram_share = 'share';
  if(azo_ssb_static.lang == 'ja') {
    this.telegram_share = '共有';
  }

  // --- Renren

  // name
  this.renren_name = 'Renren';

  // share
  this.renren_share = 'share';
  if(azo_ssb_static.lang == 'ja') {
    this.renren_share = '共有';
  }

  // --- Buffer

  // name
  this.buffer_name = 'Buffer';

  // read later
  this.buffer_readlater = 'read later';
  if(azo_ssb_static.lang == 'ja') {
    this.buffer_readlater = '後で読む';
  }

  // --- Blogger

  // name
  this.blogger_name = 'Blogger';

  // blog this
  this.blogger_blogthis = 'blog this';
  if(azo_ssb_static.lang == 'ja') {
    this.blogger_blogthis = '記事を作成';
  }

  // --- Digg

  // name
  this.digg_name = 'Digg';

  // submit
  this.digg_submit = 'submit';
  if(azo_ssb_static.lang == 'ja') {
    this.digg_submit = '送信';
  }

  // --- Flipboard

  // name
  this.flipboard_name = 'Flipboard';

  // share
  this.flipboard_share = 'share';
  if(azo_ssb_static.lang == 'ja') {
    this.flipboard_share = '共有';
  }

  // --- Instapaper

  // name
  this.instapaper_name = 'Instapaper';

  // add
  this.instapaper_add = 'add';
  if(azo_ssb_static.lang == 'ja') {
    this.instapaper_add = '追加';
  }

  // --- QQ

  // name
  this.qq_name = 'QQ';

  // share
  this.qq_share = 'share';
  if(azo_ssb_static.lang == 'ja') {
    this.qq_share = '共有';
  }

  // --- Kakao

  // name
  this.kakao_name = 'Kakao';

  // share
  this.kakao_share = 'share';
  if(azo_ssb_static.lang == 'ja') {
    this.kakao_share = '共有';
  }

  // --- OneNote

  // name
  this.onenote_name = 'OneNote';

  // save
  this.onenote_save = 'save';
  if(azo_ssb_static.lang == 'ja') {
    this.onenote_save = '保存';
  }

  // --- Known

  // name
  this.known_name = 'Known';

  // share
  this.known_share = 'share';
  if(azo_ssb_static.lang == 'ja') {
    this.known_share = '共有';
  }

  // --- Myspace

  // name
  this.myspace_name = 'Myspace';

  // post
  this.myspace_post = 'post';
  if(azo_ssb_static.lang == 'ja') {
    this.myspace_post = '投稿';
  }

  // --- Odnoklassniki

  // name
  this.odnoklassniki_name = 'Odnoklassniki';

  // share
  this.odnoklassniki_share = 'share';
  if(azo_ssb_static.lang == 'ja') {
    this.odnoklassniki_share = '共有';
  }

  // --- VKontakte

  // name
  this.vkontakte_name = 'VKontakte';

  // share
  this.vkontakte_share = 'share';
  if(azo_ssb_static.lang == 'ja') {
    this.vkontakte_share = '共有';
  }

  // --- XING

  // name
  this.xing_name = 'XING';

  // share
  this.xing_share = 'share';
  if(azo_ssb_static.lang == 'ja') {
    this.xing_share = '共有';
  }

  // --- Yummly

  // name
  this.yummly_name = 'Yummly';

  // yum
  this.yummly_yum = 'yum';
  if(azo_ssb_static.lang == 'ja') {
    this.yummly_yum = 'yum';
  }

  // --- Qzone

  // name
  this.qzone_name = 'Qzone';

  // share
  this.qzone_share = 'share';
  if(azo_ssb_static.lang == 'ja') {
    this.qzone_share = '共有';
  }

  // --- Skype

  // name
  this.skype_name = 'Skype';

  // print
  this.skype_share = 'share';
  if(azo_ssb_static.lang == 'ja') {
    this.skype_share = '共有';
  }

  // --- Viver

  // name
  this.viber_name = 'Viver';

  // forward
  this.viber_forward = 'forward';
  if(azo_ssb_static.lang == 'ja') {
    this.viber_forward = '送信';
  }

  // --- Print Friendly

  // name
  this.printfriendly_name = 'Print Friendly';

  // print
  this.printfriendly_print = 'print';
  if(azo_ssb_static.lang == 'ja') {
    this.printfriendly_print = '印刷';
  }

  // --- Amazon WishList

  // name
  this.amazon_wl_name = 'Amazon WishList';
  if(azo_ssb_static.lang == 'ja') {
    this.amazon_wl_name = 'Amazon ほしい物リスト';
  }

  // add to wish list
  this.amazon_wl_add = 'add to wish list';
  if(azo_ssb_static.lang == 'ja') {
    this.amazon_wl_add = 'ほしい物リストに追加';
  }

  // --- GMail

  // name
  this.gmail_name = 'GMail';

  // send
  this.gmail_send = 'send';
  if(azo_ssb_static.lang == 'ja') {
    this.gmail_send = '送る';
  }

  // --- RSS

  // name
  this.rss_name = 'RSS';

  // rss
  this.rss_rss = 'RSS feed';
  if(azo_ssb_static.lang == 'ja') {
    this.rss_rss = 'RSS フィード';
  }

  // --- Feedly

  // name
  this.feedly_name = 'Feedly';

  // rss
  this.feedly_rss = 'feed with Feedly';
  if(azo_ssb_static.lang == 'ja') {
    this.feedly_rss = 'Feedlyで購読';
  }

  // --- Inoreader

  // name
  this.inoreader_name = 'Inoreader';

  // rss
  this.inoreader_rss = 'feed with Inoreader';
  if(azo_ssb_static.lang == 'ja') {
    this.inoreader_rss = 'Inoreaderで購読';
  }

  // --- SMS

  // name
  this.sms_name = 'SMS';

  // SMS
  this.email_email = 'send SMS';
  if(azo_ssb_static.lang == 'ja') {
    this.sms_sms = 'SMSを送る';
  }

  // --- E-mail

  // name
  this.email_name = 'E-mail';

  // E-mail
  this.email_email = 'send E-mail';
  if(azo_ssb_static.lang == 'ja') {
    this.email_email = 'E-mailを送る';
  }

  // --- linkcopy

  // name
  this.linkcopy_name = 'copy URL';
  if(azo_ssb_static.lang == 'ja') {
    this.linkcopy_name = 'URLをコピー';
  }

  // copy
  this.linkcopy_copy = 'copy URL';
  if(azo_ssb_static.lang == 'ja') {
    this.linkcopy_copy = 'URLをコピー';
  }

  // --- bookmark

  // name
  this.bookmark_name = 'bookmaek';
  if(azo_ssb_static.lang == 'ja') {
    this.bookmark_name = 'ブックマーク';
  }

  // bookmark
  this.bookmark_bookmark = 'bookmark';
  if(azo_ssb_static.lang == 'ja') {
    this.bookmark_bookmark = 'ブックマークする';
  }

  // --- print

  // name
  this.print_name = 'print';
  if(azo_ssb_static.lang == 'ja') {
    this.print_name = '印刷';
  }

  // print
  this.print_print = 'print out this page';
  if(azo_ssb_static.lang == 'ja') {
    this.print_print = 'このページを印刷';
  }

  // --- other

  // name
  this.other_name = 'other';
  if(azo_ssb_static.lang == 'ja') {
    this.other_name = 'その他';
  }

  // other
  this.other_other = 'share to other';
  if(azo_ssb_static.lang == 'ja') {
    this.other_other = 'その他の共有';
  }

  /* === user setting end === */

  this.change_links();
};

azo_ssb.prototype.change_links = function(links) {
  this.URL = document.URL;
  this.title = document.title;
  if(links) {
    if(links.URL) {
      this.URL = links.URL;
    }
    if(links.title) {
      this.title = links.title;
    }
  }
  this.enURL = encodeURI(this.URL);
  this.encURL = encodeURIComponent(this.URL);
  this.entitle = encodeURI(this.title);
  this.enctitle = encodeURIComponent(this.title);

  var hashtag = azo_ssb_static.hashtag;
  if(links) {
    hashtag = links.hashtag;
  }
  if(!hashtag) {
    hashtag = '';
  }
  hashtag = encodeURI(hashtag);

  var description = azo_ssb_static.description;
  if(links) {
    description = links.description;
  }
  if(!description) {
    description = '';
  }
  this.description = description;
  this.endescription = encodeURI(description);
  this.encdescription = encodeURIComponent(description);

  var image = azo_ssb_static.image;
  if(links) {
    image = links.image;
  }
  if(!image) {
    image = '';
  }
  if(image != '') {
    if(!RegExp('^[http://|https://]').test(image)) {
      image = this.URL.match('(.+/).*$')[1] + image;
    }
  }
  this.image = image;
  this.enimage = encodeURI(image);
  this.encimage = encodeURIComponent(image);

  var rss = azo_ssb_static.rss;
  if(this.rss != '') {
    rss = this.rss;
  }
  if(!RegExp('^[http://|https://]').test(rss)) {
    if(rss != '') {
      rss = this.URL.match('(.+/).*$')[1] + rss;
    }
  }
  this.rss = rss;
  this.enrss = encodeURI(rss);
  this.encrss = encodeURIComponent(rss);

  var twitter_hashtag = hashtag;
  if(this.twitter_hashtag != '') {
    twitter_hashtag = encodeURI(this.twitter_hashtag);
  }
  this.twitter_hashtag = twitter_hashtag;

  var twitter_account_follow = azo_ssb_static.twitter_account_follow
  if(this.twitter_account_follow != '') {
    twitter_account_follow = this.twitter_account_follow;
  }
  this.twitter_account_follow = twitter_account_follow;

  var facebook_hashtag;
  if(hashtag != '') {
    facebook_hashtag = '%23' + hashtag;
  }
  if(this.facebook_hashtag != '') {
    facebook_hashtag = '%23' + encodeURI(this.facebook_hashtag);
  }
  this.facebook_hashtag = facebook_hashtag;

  var media = this.image;
  if(this.pinterest_media != '') {
    media = this.pinterest_media;
  }
  if(!RegExp('^[http://|https://]').test(media)) {
    media = this.URL.match('(.+/).*$')[1] + media;
  }
  this.pinterest_media = encodeURI(media);
//  this.pinterest_media = encodeURIComponent(media);

  if(this.twitter_account_via == '') {
    if(this.twitter_account_follow == '') {
      this.twitter_link = 'https://twitter.com/intent/tweet?text=' + this.enctitle + '&url=' + this.encURL + '&hashtags=' + this.twitter_hashtag;
    } else {
      this.twitter_link = 'https://twitter.com/intent/tweet?text=' + this.enctitle + '&url=' + this.encURL + '&hashtags=' + this.twitter_hashtag + '&related="' + this.twitter_account_follow;
    }
  } else {
    if(this.twitter_account_follow == '') {
      this.twitter_link = 'https://twitter.com/intent/tweet?text=' + this.enctitle + '&url=' + this.encURL + '&hashtags=' + this.twitter_hashtag + '&via=' + this.twitter_account_via;
    } else {
      this.twitter_link = 'https://twitter.com/intent/tweet?text=' + this.enctitle + '&url=' + this.encURL + '&hashtags=' + this.twitter_hashtag + '&via=' + this.twitter_account_via + '&related="' + this.twitter_account_follow;
    }
  }
//  this.facebook_link = 'https://www.facebook.com/dialog/share?app_id=' + azo_ssb_static.facebook_appid + '&hashtag=' + this.facebook_hashtag + '&href=' + this.encURL;
  this.facebook_link = 'https://www.facebook.com/dialog/share?app_id=' + azo_ssb_static.facebook_appid + '&href=' + this.encURL;
  this.hatena_link = 'https://b.hatena.ne.jp/bookmarklet?url=' + this.encURL + '&btitle=' + this.enctitle;
  this.tumblr_link = 'https://www.tumblr.com/widgets/share/tool?posttype=link&canonicalUrl=' + this.encURL + '&title=' + this.enctitle + '&caption=' + this.endescription;
  this.pocket_link = 'https://getpocket.com/save?url=' + this.encURL + '&title=' + this.enctitle;
  this.line_link = 'https://line.naver.jp/R/msg/text/?' + this.enctitle + '%0A' + this.encURL;
  this.mixi_link = 'https://mixi.jp/share.pl?u=' + this.encURL;
  this.gbookmark_link = 'https://www.google.com/bookmarks/mark?op=edit&bkmk=' + this.URL + '&title=' + this.enctitle + '&annotation=' + this.endescription;
  this.evernote_link = 'https://www.evernote.com/clip.action?url=' + this.URL + '&title=' + this.enctitle;

  this.whatsapp_link = 'https://api.whatsapp.com/send?text=' + this.enctitle + '%0A' + this.encURL;
  this.weibo_link = 'https://service.weibo.com/share/share.php?url=' + this.encURL + '&title=' + this.enctitle;
  this.facebook_msg_link = 'https://www.facebook.com/dialog/send?app_id=' + azo_ssb_static.facebook_appid + '&link=' + this.encURL;
  this.pinterest_link = 'http://pinterest.com/pin/create/button/?url=' + this.encURL + '&media=' + this.pinterest_media + '&description=' + this.enctitle;
  this.linkedin_link = 'https://www.linkedin.com/shareArticle?mini=true&title=' + this.enctitle + '&url=' + this.encURL;
  this.reddit_link = 'https://www.reddit.com/submit?url=' + this.encURL + '&title=' + this.enctitle;
  this.telegram_link = 'https://telegram.me/share/url?url=' + this.encURL + '&text=' + this.enctitle;
  this.renren_link = 'http://www.connect.renren.com/share/sharer?url=' + this.encURL + '&title=' + this.enctitle;
  this.buffer_link = 'https://bufferapp.com/add?url=' + this.encURL + '&text=' + this.enctitle;
  this.blogger_link = 'https://www.blogger.com/blog_this.pyra?u=' + this.encURL + '&n=' + this.enctitle + '&t=' + this.endescription;
  this.digg_link = 'https://www.digg.com/submit?url=' + this.encURL;
  this.flipboard_link = 'https://share.flipboard.com/bookmarklet/popout?v=2&url=' + this.encURL + '&title=' + this.enctitle;
  this.instapaper_link = 'https://www.instapaper.com/edit?url=' + this.encURL + '&title=' + this.enctitle + '&summary=' + this.endescription;
  this.qq_link = 'http://connect.qq.com/widget/shareqq/index.html?url=' + this.encURL + '&title=' + this.enctitle + '&summary=' + this.endescription;
  this.kakao_link = 'https://story.kakao.com/share?url=' + this.encURL;
  this.onenote_link = 'https://www.onenote.com/clipper/save?sourceUrl=' + this.encURL + '&title=' + this.enctitle + '&description=' + this.endescription + '&imgUrl=' + this.encimage;
  this.known_link = 'https://withknown.com/share/?url=' + this.encURL + '&title=' + this.enctitle;
  this.myspace_link = 'https://www.myspace.com/Modules/PostTo/Pages/?l=3&u=' + this.encURL + '&t=' + this.enctitle + '&c=' + this.endescription;
  this.odnoklassniki_link = 'https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=' + this.encURL;
  this.vkontakte_link = 'https://vk.com/share.php?url=' + this.encURL;
  this.xing_link = 'https://www.xing.com/social_plugins/share?url=' + this.encURL;
  this.yummly_link = 'https://www.yummly.com/urb/verify?url=' + this.encURL + '&title=' + this.enctitle;
  this.qzone_link = 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + this.encURL;
  this.skype_link = 'https://web.skype.com/share?url=' + this.encURL;
  this.viber_link = 'viber://forward?text=' + this.enctitle + '%0A' + this.encURL;
  this.printfriendly_link = 'https://www.printfriendly.com/print?url=' + this.encURL;
  this.amazon_wl_link = 'https://www.amazon.com/wishlist/add?u=' + this.encURL + '&t=' + this.enctitle;
  this.gmail_link = 'https://mail.google.com/mail/?ui=2&view=cm&fs=1&tf=1&su=' + this.enctitle + '&body=' + this.encURL + '%0A' + this.endescription;
  this.feedly_link = 'https://feedly.com/i/subscription/feed/' + this.encrss;
  this.inoreader_link = 'https://www.inoreader.com/?add_feed=' + this.encrss;
  this.sms_link = 'sms:?body=' + this.title + '\n' + this.URL;
  this.email_link = 'mailto:?subject=' + this.title + 'share&body=' + this.URL + '\n' + this.description;
};

azo_ssb.prototype.btn_spc = function(setting, tr) {
  var td = document.createElement('td');
  tr.appendChild(td);
};

azo_ssb.prototype.make_overlay = function(setting) {
  var div = document.createElement('div');
  div.className = 'azo_ssb_overlay_back_' + setting.name;
  this.overlaydev = div;
  this.overlaydev.azo_ssb = this;
  var table = document.createElement('table');
  table.className = 'azo_ssb_overlay_table_' + setting.name;
  this.overlaytable = table;
  div.addEventListener('click', function(event) { event.target.azo_ssb.modaldiv.style.display = 'none'; });
  var setting_overlay = {
    name: 'overlay_part_' + setting.name,
    buttons: [
      AZO_SSB_BTN_TWITTER,
      AZO_SSB_BTN_FACEBOOK,
      AZO_SSB_BTN_HATENA,
      AZO_SSB_BTN_TUMBLR,
      AZO_SSB_BTN_POCKET,
      AZO_SSB_BTN_LINKEDIN,
      AZO_SSB_BTN_EVERNOTE,
      AZO_SSB_BTN_BUFFER,
      AZO_SSB_BTN_BLOGGER,
      AZO_SSB_BTN_MIXI,
      AZO_SSB_BTN_GBOOKMARK,
      AZO_SSB_BTN_PINTEREST,
      AZO_SSB_BTN_DIGG,
      AZO_SSB_BTN_FLIPBOARD,
      AZO_SSB_BTN_INSTAPAPER,
      AZO_SSB_BTN_QQ,
      AZO_SSB_BTN_KAKAO,
      AZO_SSB_BTN_ONENOTE,
      AZO_SSB_BTN_KNOWN,
      AZO_SSB_BTN_MYSPACE,
      AZO_SSB_BTN_ODNOKLASSNIKI,
      AZO_SSB_BTN_VKONTAKTE,
      AZO_SSB_BTN_XING,
      AZO_SSB_BTN_YUMMLY,
      AZO_SSB_BTN_REDDIT,
      AZO_SSB_BTN_QZONE,
      AZO_SSB_BTN_LINE,
      AZO_SSB_BTN_WHATSAPP,
      AZO_SSB_BTN_FBMESSAGE,
      AZO_SSB_BTN_SKYPE,
      AZO_SSB_BTN_TELEGRAM,
      AZO_SSB_BTN_RENREN,
      AZO_SSB_BTN_WEIBO,
      AZO_SSB_BTN_VIBER,
      AZO_SSB_BTN_AMAZON_WL,
      AZO_SSB_BTN_PRINTFRIENDLY,
      AZO_SSB_BTN_GMAIL,
      AZO_SSB_BTN_RSS,
      AZO_SSB_BTN_FEEDLY,
      AZO_SSB_BTN_INOREADER,
      AZO_SSB_BTN_SMS,
      AZO_SSB_BTN_EMAIL,
      AZO_SSB_BTN_LINKCOPY,
      AZO_SSB_BTN_BOOKMARK,
      AZO_SSB_BTN_PRINT
    ],
    button_type: AZO_SSB_BTNT_ICON_LABEL,
  };
  var num = 0;
  var locate = 0;
  while(num < setting_overlay.buttons.length) {
    if(locate % 3 == 0) {
      var tr = document.createElement('tr');
    }
    switch(setting_overlay.buttons[num]) {
    case AZO_SSB_BTN_RSS:
    case AZO_SSB_BTN_FEEDLY:
    case AZO_SSB_BTN_INOREADER:
      if(this.rss == '') {
        break;
      }
    default:
      this.add_btn2(setting_overlay, tr, setting_overlay.buttons[num]);
      locate++;
      break;
    }
    num++;
    if(locate != 0 && locate % 3 == 0) {
      table.appendChild(tr);
    }
  }
  if(num % 3 != 0) {
    table.appendChild(tr);
  }
  this.modaldiv.appendChild(div);
  this.modaldiv.appendChild(table);
};

azo_ssb.prototype.getlink = function(btn) {
  var link = '';
  switch(btn) {
  case AZO_SSB_BTN_TWITTER:
    link = this.twitter_link;
    break;
  case AZO_SSB_BTN_FACEBOOK:
    link = this.facebook_link;
    break;
  case AZO_SSB_BTN_HATENA:
    link = this.hatena_link;
    break;
  case AZO_SSB_BTN_TUMBLR:
    link = this.tumblr_link;
    break;
  case AZO_SSB_BTN_POCKET:
    link = this.pocket_link;
    break;
  case AZO_SSB_BTN_LINE:
    link = this.line_link;
    break;
  case AZO_SSB_BTN_MIXI:
    link = this.mixi_link;
    break;
  case AZO_SSB_BTN_GBOOKMARK:
    link = this.gbookmark_link;
    break;
  case AZO_SSB_BTN_EVERNOTE:
    link = this.evernote_link;
    break;
//  case AZO_SSB_BTN_HANGOUT:
//    link = this.hangout_link;
//    break;
  case AZO_SSB_BTN_WHATSAPP:
    link = this.whatsapp_link;
    break;
  case AZO_SSB_BTN_WEIBO:
    link = this.weibo_link;
    break;
//  case AZO_SSB_BTN_FBMESSAGE:
//    link = this.facebook_msg_link;
//    break;
  case AZO_SSB_BTN_PINTEREST:
    link = this.pinterest_link;
    break;
  case AZO_SSB_BTN_LINKEDIN:
    link = this.linkedin_link;
    break;
  case AZO_SSB_BTN_REDDIT:
    link = this.reddit_link;
    break;
  case AZO_SSB_BTN_TELEGRAM:
    link = this.telegram_link;
    break;
  case AZO_SSB_BTN_RENREN:
    link = this.renren_link;
    break;
  case AZO_SSB_BTN_BUFFER:
    link = this.buffer_link;
    break;
  case AZO_SSB_BTN_BLOGGER:
    link = this.blogger_link;
    break;
  case AZO_SSB_BTN_DIGG:
    link = this.digg_link;
    break;
  case AZO_SSB_BTN_FLIPBOARD:
    link = this.flipboard_link;
    break;
  case AZO_SSB_BTN_INSTAPAPER:
    link = this.instapaper_link;
    break;
  case AZO_SSB_BTN_QQ:
    link = this.qq_link;
    break;
  case AZO_SSB_BTN_KAKAO:
    link = this.kakao_link;
    break;
  case AZO_SSB_BTN_ONENOTE:
    link = this.onenote_link;
    break;
  case AZO_SSB_BTN_KNOWN:
    link = this.known_link;
    break;
  case AZO_SSB_BTN_MYSPACE:
    link = this.myspace_link;
    break;
  case AZO_SSB_BTN_ODNOKLASSNIKI:
    link = this.odnoklassniki_link;
    break;
  case AZO_SSB_BTN_VKONTAKTE:
    link = this.vkontakte_link;
    break;
  case AZO_SSB_BTN_XING:
    link = this.xing_link;
    break;
  case AZO_SSB_BTN_YUMMLY:
    link = this.yummly_link;
    break;
  case AZO_SSB_BTN_QZONE:
    link = this.qzone_link;
    break;
  case AZO_SSB_BTN_SKYPE:
    link = this.skype_link;
    break;
  case AZO_SSB_BTN_VIBER:
    link = this.viber_link;
    break;
  case AZO_SSB_BTN_PRINTFRIENDLY:
    link = this.printfriendly_link;
    break;
  case AZO_SSB_BTN_AMAZON_WL:
    link = this.amazon_wl_link;
    break;
  case AZO_SSB_BTN_GMAIL:
    link = this.gmail_link;
    break;
  case AZO_SSB_BTN_RSS:
    if(this.rss != '') {
      link = this.rss_link;
    }
    break;
  case AZO_SSB_BTN_FEEDLY:
    if(this.rss != '') {
      link = this.feedly_link;
    }
    break;
  case AZO_SSB_BTN_INOREADER:
    if(this.rss != '') {
      link = this.inoreader_link;
    }
    break;
  case AZO_SSB_BTN_SMS:
    link = this.sms_link;
    break;
  case AZO_SSB_BTN_EMAIL:
    link = this.email_link;
    break;
  }
  return link;
}

azo_ssb.prototype.add_btn3 = function(setting, tr, btn, nameid, imgurl, snsname, title, cb) {
  var td = document.createElement('td');
  td.addEventListener('click', cb);
  td.className = nameid + setting.name;
  td.btn = btn;
  td.azo_ssb = this;
  td.title = title;
  if(setting.button_type == AZO_SSB_BTNT_ICON_LABEL || setting.button_type == AZO_SSB_BTNT_ICON || setting.button_type == AZO_SSB_BTNT_ICON_LABEL_NL) {
    var img = document.createElement('img');
    img.className = 'azo_ssb_icon_' + setting.name;
    img.src = imgurl;
    img.btn = btn;
    img.azo_ssb = this;
    img.title = title;
    td.appendChild(img);
  }
  if(setting.button_type == AZO_SSB_BTNT_ICON_LABEL_NL) {
    var br = document.createElement('br');
    td.appendChild(br);
  }
  if(setting.button_type == AZO_SSB_BTNT_ICON_LABEL || setting.button_type == AZO_SSB_BTNT_LABEL || setting.button_type == AZO_SSB_BTNT_ICON_LABEL_NL) {
    var span = document.createElement('span');
    span.btn = btn;
    span.azo_ssb = this;
    span.innerHTML = snsname;
    td.appendChild(span);
  }
  tr.appendChild(td);
};

azo_ssb.prototype.add_btn2 = function(setting, tr, btn) {
  switch(btn) {
  case AZO_SSB_BTN_SPC:
    this.btn_spc(setting, tr);
    break;
  case AZO_SSB_BTN_TWITTER:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_twitter-', azo_ssb_home + 'icons_addtoany/twitter.svg', this.twitter_name, this.twitter_tweet, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_FACEBOOK:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_facebook-', azo_ssb_home + 'icons_addtoany/facebook.svg', this.facebook_name, this.facebook_share, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_HATENA:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_hatena-', azo_ssb_home + 'icons_addtoany/hatena.svg', this.hatena_name, this.hatena_bookmark, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_TUMBLR:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_tumblr-', azo_ssb_home + 'icons_addtoany/tumblr.svg', this.tumblr_name, this.tumblr_share, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_POCKET:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_pocket-', azo_ssb_home + 'icons_addtoany/pocket.svg', this.pocket_name, this.pocket_pocket, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_LINE:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_line-', azo_ssb_home + 'icons_addtoany/line.svg', this.line_name, this.line_send, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_MIXI:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_mixi-', azo_ssb_home + 'icons_addtoany/mixi.svg', this.mixi_name, this.mixi_check, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_GBOOKMARK:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_gbookmark-', azo_ssb_home + 'icons_addtoany/google.svg', this.gbookmark_name, this.gbookmark_bookmark, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_EVERNOTE:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_evernote-', azo_ssb_home + 'icons_addtoany/evernote.svg', this.evernote_name, this.evernote_clip, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });

    break;
//    case AZO_SSB_BTN_HANGOUT:
//      this.add_btn3(setting, tr, btn, 'azo_ssb_btn_hangout-', azo_ssb_home + 'icons_addtoany/hangout.svg', this.hangout_name, this.hangout_send, this.hangout_link, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
//      break;
  case AZO_SSB_BTN_WHATSAPP:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_whatsapp-', azo_ssb_home + 'icons_addtoany/whatsapp.svg', this.whatsapp_name, this.whatsapp_send, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_WEIBO:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_weibo-', azo_ssb_home + 'icons_addtoany/sina_weibo.svg', this.weibo_name, this.weibo_share, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_FBMESSAGE:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_facebook_msg-', azo_ssb_home + 'icons_addtoany/facebook_messenger.svg', this.facebook_msg_name, this.facebook_msg_send, function(event) { FB.ui({ method: 'send', link: event.target.azo_ssb.URL}); });
    break;
  case AZO_SSB_BTN_PINTEREST:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_pinterest-', azo_ssb_home + 'icons_addtoany/pinterest.svg', this.pinterest_name, this.pinterest_pinit, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_LINKEDIN:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_linkedin-', azo_ssb_home + 'icons_addtoany/linkedin.svg', this.linkedin_name, this.linkedin_share, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_REDDIT:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_reddit-', azo_ssb_home + 'icons_addtoany/reddit.svg', this.reddit_name, this.reddit_post, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_TELEGRAM:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_telegram-', azo_ssb_home + 'icons_addtoany/telegram.svg', this.telegram_name, this.telegram_share, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_RENREN:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_renren-', azo_ssb_home + 'icons_addtoany/renren.svg', this.renren_name, this.renren_share, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_BUFFER:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_buffer-', azo_ssb_home + 'icons_addtoany/buffer.svg', this.buffer_name, this.buffer_readlater, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_BLOGGER:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_blogger-', azo_ssb_home + 'icons_addtoany/blogger.svg', this.blogger_name, this.blogger_blogthis, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_DIGG:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_digg-', azo_ssb_home + 'icons_addtoany/digg.svg', this.digg_name, this.digg_submit, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_FLIPBOARD:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_flipboard-', azo_ssb_home + 'icons_addtoany/flipboard.svg', this.flipboard_name, this.flipboard_share, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_INSTAPAPER:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_instapaper-', azo_ssb_home + 'icons_addtoany/instapaper.svg', this.instapaper_name, this.instapaper_add, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_QQ:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_qq-', azo_ssb_home + 'etc/qq.svg', this.qq_name, this.qq_share, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_KAKAO:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_kakao-', azo_ssb_home + 'icons_addtoany/kakao.svg', this.kakao_name, this.kakao_share, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_ONENOTE:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_onenote-', azo_ssb_home + 'etc/onenote.svg', this.onenote_name, this.onenote_save, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_KNOWN:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_known-', azo_ssb_home + 'icons_addtoany/known.svg', this.known_name, this.known_share, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_MYSPACE:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_myspace-', azo_ssb_home + 'icons_addtoany/myspace.svg', this.myspace_name, this.myspace_post, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_ODNOKLASSNIKI:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_odnoklassniki-', azo_ssb_home + 'icons_addtoany/odnoklassniki.svg', this.odnoklassniki_name, this.odnoklassniki_share, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_VKONTAKTE:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_vkontakte-', azo_ssb_home + 'icons_addtoany/vk.svg', this.vkontakte_name, this.vkontakte_share, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_XING:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_xing-', azo_ssb_home + 'icons_addtoany/xing.svg', this.xing_name, this.xing_share, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_YUMMLY:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_yummly-', azo_ssb_home + 'icons_addtoany/yummly.svg', this.yummly_name, this.yummly_yum, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_QZONE:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_qzone-', azo_ssb_home + 'icons_addtoany/qzone.svg', this.qzone_name, this.qzone_share, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_SKYPE:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_skype-', azo_ssb_home + 'icons_addtoany/skype.svg', this.skype_name, this.skype_share, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_VIBER:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_viber-', azo_ssb_home + 'icons_addtoany/viber.svg', this.viber_name, this.viber_forward, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_PRINTFRIENDLY:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_printfriendly-', azo_ssb_home + 'icons_addtoany/printfriendly.svg', this.printfriendly_name, this.printfriendly_print, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_AMAZON_WL:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_amazon_wl-', azo_ssb_home + 'icons_addtoany/amazon.svg', this.amazon_wl_name, this.amazon_wl_add, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_GMAIL:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_gmail-', azo_ssb_home + 'icons_addtoany/gmail.svg', this.gmail_name, this.gmail_send, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_RSS:
    if(this.rss != '') {
      this.add_btn3(setting, tr, btn, 'azo_ssb_btn_rss-', azo_ssb_home + 'icons_addtoany/feed.svg', this.rss_name, this.rss_rss, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    }
    break;
  case AZO_SSB_BTN_FEEDLY:
    if(this.rss != '') {
      this.add_btn3(setting, tr, btn, 'azo_ssb_btn_feedly-', azo_ssb_home + 'etc/ico_feedly.svg', this.feedly_name, this.feedly_rss, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    }
    break;
  case AZO_SSB_BTN_INOREADER:
    if(this.rss != '') {
      this.add_btn3(setting, tr, btn, 'azo_ssb_btn_inoreader-', azo_ssb_home + 'etc/InoreaderLOGO.svg', this.inoreader_name, this.inoreader_rss, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    }
    break;
  case AZO_SSB_BTN_SMS:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_sms-', azo_ssb_home + 'icons_addtoany/sms.svg', this.sms_name, this.sms_sms, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_EMAIL:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_email-', azo_ssb_home + 'icons_addtoany/email.svg', this.email_name, this.email_email, function(event) { window.open(event.target.azo_ssb.getlink(event.target.btn), '_blank'); });
    break;
  case AZO_SSB_BTN_LINKCOPY:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_linkcopy-', azo_ssb_home + '148705-essential-collection/svg/link.svg', this.linkcopy_name, this.linkcopy_copy, function(event) { event.target.azo_ssb.copy_link(); });
    break;
  case AZO_SSB_BTN_BOOKMARK:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_bookmark-', azo_ssb_home + '148705-essential-collection/svg/bookmark.svg', this.bookmark_name, this.bookmark_bookmark, function(event) { event.target.azo_ssb.add_favorite(); });
    break;
  case AZO_SSB_BTN_PRINT:
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_print-', azo_ssb_home + '148705-essential-collection/svg/print.svg', this.print_name, this.print_print, function(event) { window.print(); });
    break;
  case AZO_SSB_BTN_OTHER:
    this.make_overlay(setting);
    this.add_btn3(setting, tr, btn, 'azo_ssb_btn_other-', azo_ssb_home + 'icons_addtoany/a2a.svg', this.other_name, this.other_other, function(event) { event.target.azo_ssb.modaldiv.style.display = 'block'; });
    break;
  }
};

azo_ssb.prototype.setting_btn = function() {
  var num = 0;
  if(this.setting.table_column > 0 && this.setting.table_row > 0) {
    for(var row = 0; row < this.setting.table_row; row++) {
      var tr = document.createElement('tr');
      for(var column = 0; column < this.setting.table_column; column++) {
        if(num < this.setting.buttons.length) {
          switch(this.setting.buttons[num]) {
          case AZO_SSB_BTN_RSS:
          case AZO_SSB_BTN_FEEDLY:
          case AZO_SSB_BTN_INOREADER:
            if(this.rss == '') {
              column--;
              break;
            }
          default:
            this.add_btn2(this.setting, tr, this.setting.buttons[num]);
          }
        } else {
          this.add_btn2(this.setting, tr, this.btnt_spc);
        }
        num++;
      }
      this.table.appendChild(tr);
    }
  } else if(this.setting.table_column > 0 && this.setting.table_row <= 0){
    while(num < this.setting.buttons.length) {
      var tr = document.createElement('tr');
      for(var column = 0; column < this.setting.table_column; column++) {
        switch(this.setting.buttons[num]) {
        case AZO_SSB_BTN_RSS:
        case AZO_SSB_BTN_FEEDLY:
        case AZO_SSB_BTN_INOREADER:
          if(this.rss == '') {
            column--;
            break;
          }
        default:
          this.add_btn2(this.setting, tr, this.setting.buttons[num]);
        }
        num++;
      }
      this.table.appendChild(tr);
    }
  } else if(this.setting.table_column <= 0 && this.setting.table_row > 0){
    for(var row = 0; row < this.setting.buttons.length; row++) {
      var tr = document.createElement('tr');
      switch(this.setting.buttons[num]) {
      case AZO_SSB_BTN_RSS:
      case AZO_SSB_BTN_FEEDLY:
      case AZO_SSB_BTN_INOREADER:
        if(this.rss == '') {
          row--;
          break;
        }
      default:
        this.add_btn2(this.setting, tr, this.setting.buttons[num]);
      }
      num++;
      this.table.appendChild(tr);
    }
  } else {
    var tr = document.createElement('tr');
    for(var column = 0; column < this.setting.buttons.length; column++) {
      switch(this.setting.buttons[num]) {
      case AZO_SSB_BTN_RSS:
      case AZO_SSB_BTN_FEEDLY:
      case AZO_SSB_BTN_INOREADER:
        if(this.rss == '') {
          column--;
          break;
        }
      default:
        this.add_btn2(this.setting, tr, this.setting.buttons[num]);
      }
      num++;
    }
    this.table.appendChild(tr);
  }
};

azo_ssb_array = [];

function azo_ssb_array_add(azo_ssb_setting) {
  var ssb = new azo_ssb(azo_ssb_setting);
  azo_ssb_array.push(ssb);
  return ssb;
}

document.addEventListener('DOMContentLoaded', function(event) {
  if(azo_ssb_array.length > 0) {
    azo_ssb_preinit();

    azo_ssb_head();
    azo_ssb_top();
    azo_ssb_bottom();

    for(var i = 0; i < azo_ssb_array.length; i++) {
      azo_ssb_array[i].init();
      azo_ssb_array[i].setting_btn();
    }
  }
});
