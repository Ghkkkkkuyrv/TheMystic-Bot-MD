let handler = async (m, { conn, args, usedPrefix, command }) => {
 const taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
  
 conn.relayMessage(m.chat, {
  viewOnceMessage: {
   message: {
    interactiveMessage: {
     header: {
      title: `┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*🐉✬⃝╿↵ مرحــبـا ➻${m.pushName}*
── • ◈ • ──
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
➻𒍜➻🏞️│الاديـت و الـصـوره│📹
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢`
     },
     body: {
      text: ''
     },
     nativeFlowMessage: {
      buttons: [
       {
        name: 'single_select',
        buttonParamsJson: JSON.stringify({
         title: 'اضغط',
         sections: [
          {
           title: 'قسم الايديت',
           highlight_label: 'new',
           rows: [
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏فانرت', description: '', id: '.فانرت' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏هوسبو', description: '', id: '.هوسبو' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏كانا', description: '', id: '.كانا' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏ميغومين', description: '', id: '.ميغومين' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏نيكو', description: '', id: '.نيكو' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏شوتا', description: '', id: '.شوتا' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏وايف', description: '', id: '.وايف' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏الينا', description: '', id: '.الينا' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏مراتي', description: '', id: '.مراتي' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏بنت', description: '', id: '.بنت' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏وايفو', description: '', id: '.وايفو' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏لولي', description: '', id: '.لولي' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏لولي2', description: '', id: '.لولي2' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏كوسبلاي', description: '', id: '.كوسبلاي' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏ساكورا', description: '', id: '.ساكورا' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏ساسكي', description: '', id: '.ساسكي' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏ساجيري', description: '', id: '.ساجيري' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏نيزوكو', description: '', id: '.نيزوكو' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏ناروتو', description: '', id: '.ناروتو' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏ميناتو', description: '', id: '.ميناتو' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏ميكو', description: '', id: '.ميكو' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏ميكاسا', description: '', id: '.ميكاسا' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏مادارا', description: '', id: '.مادارا' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏جوزو', description: '', id: '.جوزو' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏كوترو', description: '', id: '.كوترو' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏كانيكي', description: '', id: '.كانيكي' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏كاوري', description: '', id: '.كاوري' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏كاجيرو', description: '', id: '.كاجيرو' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏كاجا', description: '', id: '.كاجا' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏ايتوري', description: '', id: '.ايتوري' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏ايتاتشي', description: '', id: '.ايتاتشي' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏ايسوزي', description: '', id: '.ايسوزي' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏اينوري', description: '', id: '.اينوري' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏هيناتا', description: '', id: '.هيناتا' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏هيستيا', description: '', id: '.هيستيا' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏ايميليا', description: '', id: '.ايميليا' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏ايبا', description: '', id: '.ايبا' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏ايرزا', description: '', id: '.ايرزا' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏ديدارا', description: '', id: '.ديدارا' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏شيتوجي', description: '', id: '.شيتوجي' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏تشيهو', description: '', id: '.تشيهو' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏بوروتو', description: '', id: '.بوروتو' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏أيوزاوا', description: '', id: '.أيوزاوا' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏اسونا', description: '', id: '.اسونا' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏اناا', description: '', id: '.اناا' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏اكياما', description: '', id: '.اكياما' },
            { header: 'الاديـت و الـصـوره', title: '⌬ ❛╏اكيرا', description: '', id: '.اكيرا' }
           ]
          }
         ]
        }),
        messageParamsJson: ''
       }
      ]
     }
    }
   }
  }
 }, {})
}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['الانمي']

export default handler