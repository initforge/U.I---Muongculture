import './Instruments.css'

const Instruments = () => {
  return (
    <div className="instruments-page">
      <section className="section hero-section">
        <div className="container">
          <h1 className="page-title">Nhạc cụ truyền thống Mường</h1>
        </div>
      </section>

      {/* Sáo Ôi Section */}
      <section className="section instrument-section">
        <div className="container">
          <div className="instrument-header">
            <div className="instrument-icon">🎵</div>
            <h2 className="instrument-title">Sáo Ôi</h2>
          </div>

          <div className="instrument-content">
            <div className="instrument-description">
              <p>
                <strong>Sáo Ôi</strong> (còn gọi là <strong>Kháo Ôi</strong> hoặc <strong>Ống Ôi</strong>) 
                là một loại sáo dọc được làm từ tre, nứa. Đây là nhạc cụ truyền thống quan trọng 
                trong văn hóa âm nhạc Mường.
              </p>
              <p>
                Sáo Ôi có <strong>4 lỗ</strong> (2 lỗ cách xa nhau, 2 lỗ gần nhau), tạo ra 
                <strong>5 nốt nhạc</strong>: đồ, mi, pha, son, si (hoặc Hò, Sự, Sang, Xê, Cống). 
                Cấu trúc của sáo bao gồm: một lỗ chính ở dưới dùng để bịt ngón cái, ba lỗ ở trên, 
                và một lỗ thông hơi. Quá trình chế tác sáo rất tỉ mỉ, đòi hỏi sự khéo léo và 
                kinh nghiệm của người thợ.
              </p>
            </div>

            <div className="instrument-diagram">
              <div className="diagram-container">
                <div className="diagram">
                  <div className="diagram-flute">
                    <div className="flute-body"></div>
                    <div className="flute-hole hole-1" title="Đầu dùng để thổi"></div>
                    <div className="flute-hole hole-2"></div>
                    <div className="flute-hole hole-3"></div>
                    <div className="flute-hole hole-4" title="Lỗ bịt ngón cái"></div>
                    <div className="flute-hole hole-5" title="Lỗ bịt ngón út"></div>
                    <div className="flute-joint" title="Đốt"></div>
                    <div className="flute-cover" title="Lá chuối (băng dính) bịt"></div>
                  </div>
                  <div className="diagram-labels">
                    <div className="label label-top">Đầu dùng để thổi</div>
                    <div className="label label-length-top">7 cm</div>
                    <div className="label label-length-side">70 cm</div>
                    <div className="label label-joint">Đốt</div>
                    <div className="label label-cover">Lá chuối (băng dính) bịt</div>
                    <div className="label label-thumb">Lỗ bịt ngón cái</div>
                    <div className="label label-pinky">Lỗ bịt ngón út</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="instrument-image">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop" 
                alt="Người chơi sáo Ôi" 
              />
              <p className="image-caption">Tiếng sáo gọi bạn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Đàn nhị Section */}
      <section className="section instrument-section decorative-pattern">
        <div className="container">
          <div className="instrument-header">
            <div className="instrument-icon">🎻</div>
            <h2 className="instrument-title">Đàn nhị</h2>
          </div>

          <div className="instrument-content">
            <div className="instrument-description">
              <p>
                <strong>Đàn nhị</strong> là nhạc cụ dây xuất hiện ở Việt Nam từ khoảng thế kỷ 10. 
                Đàn được sử dụng rộng rãi bởi nhiều dân tộc như Kinh, Tày, Nùng, Thái, Mường, 
                Dao, Giáy, H'Mông.
              </p>
              
              <div className="parts-list">
                <h3>Các bộ phận của Đàn nhị:</h3>
                <ol>
                  <li>
                    <strong>Bát nhị</strong> (Thân đàn): Hộp cộng hưởng hình quả bầu, làm bằng gỗ cứng, 
                    một đầu được bịt bằng da rắn hoặc da kỳ đà.
                  </li>
                  <li>
                    <strong>Dọc nhị</strong> (Cần đàn): Thanh thẳng, hơi ngả về sau, được cắm xuyên 
                    qua mặt sau của thân đàn.
                  </li>
                  <li>
                    <strong>Trục dây</strong>: Trục trên và trục dưới được cắm xuyên qua đầu cần đàn, 
                    dùng để điều chỉnh độ căng của dây.
                  </li>
                  <li>
                    <strong>Dây nhị</strong>: Trước đây làm bằng tơ tằm xoắn, nay thường dùng nylon 
                    hoặc kim loại. Dây kim loại có độ cao tốt hơn nhưng ít ấm hơn tơ hoặc nylon. 
                    Thường được lên dây theo quãng 4, quãng 5, hoặc quãng 7 thứ, phổ biến nhất là quãng 5.
                  </li>
                  <li>
                    <strong>Cử nhị</strong> (Ngựa đàn): Một sợi tơ xoắn hoặc khung, đặt dưới hai dây 
                    đàn gần cần đàn, dưới trục dây. Dùng để điều chỉnh cao độ: kéo xuống làm ngắn dây 
                    (cao hơn), đẩy lên làm dài dây (thấp hơn). Trục dây dùng để chỉnh tinh chỉnh.
                  </li>
                  <li>
                    <strong>Cung vĩ</strong> (Cung kéo): Làm bằng tre hoặc gỗ, có lông ngựa. Lông 
                    ngựa được đặt giữa hai dây đàn, không thể tách rời khỏi thân đàn.
                  </li>
                </ol>
              </div>
            </div>

            <div className="instrument-diagram">
              <div className="dan-nhi-diagram">
                <div className="dan-nhi-parts">
                  <div className="part part-truc-day" title="Trục dây">Trục dây</div>
                  <div className="part part-cung-vi" title="Cung vĩ">Cung vĩ</div>
                  <div className="part part-cu-nhi" title="Cử nhị">Cử nhị</div>
                  <div className="part part-can-nhi" title="Cần nhị">Cần nhị</div>
                  <div className="part part-bat-nhi" title="Bát nhị">Bát nhị</div>
                </div>
              </div>
            </div>

            <div className="instrument-image">
              <img 
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop" 
                alt="Nghệ nhân chơi đàn nhị" 
              />
              <p className="image-caption">Nghệ nhân biểu diễn đàn nhị</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Instruments

