setInterval(() => {
  d = new Date();
  h_time = d.getHours();
  m_time = d.getMinutes();
  s_time = d.getSeconds();
  h_handrotation = 30 * h_time + m_time / 2;
  m_handrotation = 6 * m_time;
  s_handrotation = 6 * s_time;
      
  Hour_Hand.style.transform = `rotate(${ h_handrotation}deg)`;
  Min_Hand.style.transform = `rotate(${ m_handrotation}deg)`;
  Sec_Hand.style.transform = `rotate(${ s_handrotation}deg)`;
}, 1000);
