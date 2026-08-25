import { useState } from "react";

import Header from "./components/Header";
import ContentPanel from "./components/ContentPanel";
import StylingPanel from "./components/StylingPanel";
import MobilePreview from "./components/MobilePreview";

import { defaultCampaign } from "./data/defaultCampaign";

import "./App.css";

function App() {
  const [campaign, setCampaign] = useState(defaultCampaign);
  const [activeTab, setActiveTab] = useState("content");
  const [previewPage, setPreviewPage] = useState("initial");

  const updateSection = (section, updates) => {
    setCampaign((previous) => ({
      ...previous,

      [section]: {
        ...previous[section],
        ...updates,
      },
    }));
  };

  const updateStyling = (updates) => {
    setCampaign((previous) => ({
      ...previous,

      styling: {
        ...previous.styling,
        ...updates,
      },
    }));
  };

  const resetCampaign = () => {
    setCampaign(structuredClone(defaultCampaign));
    setPreviewPage("initial");
  };

  return (
    <div className="app">
      <Header onReset={resetCampaign} />

      <main className="builder-layout">
        <section className="editor-panel">
          <div className="editor-tabs">
            <button
              className={activeTab === "content" ? "active" : ""}
              onClick={() => setActiveTab("content")}
            >
              <span>✎</span>
              Content
            </button>

            <button
              className={activeTab === "styling" ? "active" : ""}
              onClick={() => setActiveTab("styling")}
            >
              <span>◉</span>
              Styling
            </button>
          </div>

          <div className="editor-scroll">
            {activeTab === "content" ? (
              <ContentPanel
                campaign={campaign}
                updateSection={updateSection}
              />
            ) : (
              <StylingPanel
                styling={campaign.styling}
                updateStyling={updateStyling}
              />
            )}
          </div>
        </section>

        <aside className="preview-panel">
          <div className="preview-header">
            <div>
              <span className="eyebrow">PREVIEW</span>

              <h2>Live Preview</h2>

              <p>Changes appear instantly</p>
            </div>

            <span className="device-badge">
              <span className="status-dot" />
              Mobile
            </span>
          </div>

          <div className="preview-area">
            <MobilePreview
              campaign={campaign}
              page={previewPage}
              setPage={setPreviewPage}
            />
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;