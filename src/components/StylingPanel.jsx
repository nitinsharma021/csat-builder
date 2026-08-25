import Slider from "./Slider";

function ColorControl({ label, description, value, onChange }) {
  return (
    <div className="color-setting">
      <div className="setting-info">
        <label>{label}</label>

        <p>{description}</p>
      </div>

      <div className="color-control">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        <input
          className="hex-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

function StylingPanel({ styling, updateStyling }) {
  return (
    <div className="editor-page">
      <div className="page-heading">
        <span className="eyebrow">STYLING</span>

        <h2>Campaign Styling</h2>

        <p>
          Customize the visual appearance of your customer feedback
          experience.
        </p>
      </div>

      {/* COLORS */}

      <section className="editor-card">
        <div className="card-heading">
          <div className="section-number">01</div>

          <div>
            <h3>Colors</h3>
            <p>Define the colors used throughout your campaign.</p>
          </div>
        </div>

        <div className="settings-list">
          <ColorControl
            label="Background color"
            description="Main background of the feedback experience."
            value={styling.background}
            onChange={(value) =>
              updateStyling({
                background: value,
              })
            }
          />

          <ColorControl
            label="Title color"
            description="Color used for primary headings."
            value={styling.titleColor}
            onChange={(value) =>
              updateStyling({
                titleColor: value,
              })
            }
          />

          <ColorControl
            label="Subtitle color"
            description="Color used for supporting text."
            value={styling.subtitleColor}
            onChange={(value) =>
              updateStyling({
                subtitleColor: value,
              })
            }
          />

          <ColorControl
            label="Button color"
            description="Primary action button color."
            value={styling.buttonColor}
            onChange={(value) =>
              updateStyling({
                buttonColor: value,
              })
            }
          />

          <ColorControl
            label="Button text color"
            description="Text displayed inside buttons."
            value={styling.buttonTextColor}
            onChange={(value) =>
              updateStyling({
                buttonTextColor: value,
              })
            }
          />
        </div>
      </section>

      {/* RATING */}

      <section className="editor-card">
        <div className="card-heading">
          <div className="section-number">02</div>

          <div>
            <h3>Rating</h3>
            <p>Customize how rating selections appear.</p>
          </div>
        </div>

        <div className="settings-list">
          <ColorControl
            label="Selected color"
            description="Color used for selected ratings."
            value={styling.selectedColor}
            onChange={(value) =>
              updateStyling({
                selectedColor: value,
              })
            }
          />

          <ColorControl
            label="Unselected color"
            description="Color used for inactive ratings."
            value={styling.unselectedColor}
            onChange={(value) =>
              updateStyling({
                unselectedColor: value,
              })
            }
          />
        </div>
      </section>

      {/* TYPOGRAPHY */}

      <section className="editor-card">
        <div className="card-heading">
          <div className="section-number">03</div>

          <div>
            <h3>Typography</h3>
            <p>Control the size and weight of your campaign text.</p>
          </div>
        </div>

        <div className="slider-list">
          <Slider
            label="Title font size"
            description="Size of primary headings."
            value={styling.titleFontSize}
            min={16}
            max={32}
            unit="px"
            onChange={(value) =>
              updateStyling({
                titleFontSize: value,
              })
            }
          />

          <Slider
            label="Title font weight"
            description="Thickness of primary headings."
            value={styling.titleFontWeight}
            min={400}
            max={800}
            step={100}
            onChange={(value) =>
              updateStyling({
                titleFontWeight: value,
              })
            }
          />

          <Slider
            label="Subtitle font size"
            description="Size of supporting text."
            value={styling.subtitleFontSize}
            min={12}
            max={22}
            unit="px"
            onChange={(value) =>
              updateStyling({
                subtitleFontSize: value,
              })
            }
          />

          <Slider
            label="Subtitle font weight"
            description="Thickness of supporting text."
            value={styling.subtitleFontWeight}
            min={300}
            max={700}
            step={100}
            onChange={(value) =>
              updateStyling({
                subtitleFontWeight: value,
              })
            }
          />
        </div>
      </section>

      {/* LAYOUT */}

      <section className="editor-card">
        <div className="card-heading">
          <div className="section-number">04</div>

          <div>
            <h3>Layout & Buttons</h3>
            <p>Adjust spacing and button appearance.</p>
          </div>
        </div>

        <div className="slider-list">
          <Slider
            label="Popup border radius"
            description="Roundness of the feedback card."
            value={styling.popupRadius}
            min={0}
            max={32}
            unit="px"
            onChange={(value) =>
              updateStyling({
                popupRadius: value,
              })
            }
          />

          <Slider
            label="Button width"
            description="Width of the primary action."
            value={styling.buttonWidth}
            min={60}
            max={100}
            unit="%"
            onChange={(value) =>
              updateStyling({
                buttonWidth: value,
              })
            }
          />

          <Slider
            label="Button height"
            description="Height of the primary action."
            value={styling.buttonHeight}
            min={38}
            max={60}
            unit="px"
            onChange={(value) =>
              updateStyling({
                buttonHeight: value,
              })
            }
          />

          <Slider
            label="Button border radius"
            description="Roundness of the primary action."
            value={styling.buttonRadius}
            min={0}
            max={24}
            unit="px"
            onChange={(value) =>
              updateStyling({
                buttonRadius: value,
              })
            }
          />
        </div>
      </section>
    </div>
  );
}

export default StylingPanel;