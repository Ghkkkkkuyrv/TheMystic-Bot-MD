const xpperdiamond = 350 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperdiamond) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperdiamond * count) {
    global.db.data.users[m.sender].exp -= xpperdiamond * count
    global.db.data.users[m.sender].diamond += count
    conn.reply(m.chat, `*ملاحظة الدفع 📝*
    
*شراء* : + ${count}💎 
*أنفق* : -${xpperdiamond * count} XP`, m)
  } else conn.reply(m.chat, `*⚠️ ليس لديك ما يكفي من اكسبي للشراء ${count} الماس 💎*`, m)
}
handler.help = ['buy', 'buyall']
handler.tags = ['rg']
handler.command = ['شراء', 'شراءالكل'] 
handler.register = true
handler.disabled = false

export default handler
