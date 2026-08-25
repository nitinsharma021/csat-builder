import { useEffect, useState } from "react";

function ContentPanel({ campaign, updateSection }) {
  const { initial, feedback, thankYou } = campaign;
  const [mediaPreview, setMediaPreview] = useState(null);

  useEffect(() => {
    if (!thankYou.media) {
      setMediaPreview(null);
      return;
    }

    if (typeof thankYou.media === "string") {
      setMediaPreview(thankYou.media);
      return;
    }

    const objectUrl = URL.createObjectURL(thankYou.media);
    setMediaPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [thankYou.media]);

  const updateFeedback = (updates) => {
    updateSection("feedback", updates);
  };

  const updateOption = (index, value) => {
    const options = [...feedback.options];
    options[index] = value;

    updateFeedback({ options });
  };

  const addOption = () => {
    updateFeedback({
      options: [...feedback.options, `New option ${feedback.options.length + 1}`],
    });
  };

  const removeOption = (index) => {
    if (feedback.options.length <= 1) return;

    updateFeedback({
      options: feedback.options.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="editor-page">
      <div className="page-heading">
        <span className="eyebrow">CONTENT</span>

        <h2>Campaign Content</h2>

        <p>
          Configure the content your customers will see during the feedback
          experience.
        </p>
      </div>

      {/* INITIAL */}

      <section className="editor-card">
        <div className="card-heading">
          <div className="section-number">01</div>

          <div>
            <h3>Initial Feedback</h3>
            <p>First impression shown to your customer.</p>
          </div>
        </div>

        <div className="field">
          <label>Title</label>
          <p className="field-description">
            Main heading displayed when the campaign opens.
          </p>

          <input
            value={initial.title}
            onChange={(e) =>
              updateSection("initial", {
                title: e.target.value,
              })
            }
            placeholder="Enter title"
          />
        </div>

        <div className="field">
          <label>Subtitle</label>
          <p className="field-description">
            Supporting message shown below the title.
          </p>

          <textarea
            rows={3}
            value={initial.subtitle}
            onChange={(e) =>
              updateSection("initial", {
                subtitle: e.target.value,
              })
            }
            placeholder="Enter subtitle"
          />
        </div>

        <div className="field">
          <label>Button Text</label>

          <input
            value={initial.buttonText}
            onChange={(e) =>
              updateSection("initial", {
                buttonText: e.target.value,
              })
            }
            placeholder="Enter button text"
          />
        </div>
      </section>

      {/* FEEDBACK */}

      <section className="editor-card">
        <div className="card-heading">
          <div className="section-number">02</div>

          <div>
            <h3>Feedback Form</h3>
            <p>Customize how customers provide feedback.</p>
          </div>
        </div>

        <div className="field">
          <label>Question</label>

          <input
            value={feedback.question}
            onChange={(e) =>
              updateFeedback({
                question: e.target.value,
              })
            }
            placeholder="Enter feedback question"
          />
        </div>

        <div className="field">
          <label>Rating Style</label>

          <p className="field-description">
            Choose how customers will rate their experience.
          </p>

          <div className="segmented-control">
            <button
              type="button"
              className={feedback.ratingType === "stars" ? "active" : ""}
              onClick={() =>
                updateFeedback({
                  ratingType: "stars",
                })
              }
            >
              ★ Stars
            </button>

            <button
              type="button"
              className={feedback.ratingType === "numbers" ? "active" : ""}
              onClick={() =>
                updateFeedback({
                  ratingType: "numbers",
                })
              }
            >
              1–5 Numbers
            </button>
          </div>
        </div>

        <div className="field">
          <div className="field-title-row">
            <div>
              <label>Feedback Options</label>

              <p className="field-description">
                Add choices customers can select.
              </p>
            </div>

            <span className="count-badge">
              {feedback.options.length} options
            </span>
          </div>

          <div className="options-list">
            {feedback.options.map((option, index) => (
              <div className="option-row" key={index}>
                <span className="drag-handle">⠿</span>

                <input
                  value={option}
                  onChange={(e) => updateOption(index, e.target.value)}
                />

                <button
                  type="button"
                  className="delete-button"
                  onClick={() => removeOption(index)}
                  disabled={feedback.options.length <= 1}
                  title="Delete option"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button type="button" className="add-option" onClick={addOption}>
            + Add option
          </button>
        </div>

        <div className="toggle-container">
          <div className="toggle-text">
            <strong>Additional comments</strong>
            <p>Allow customers to leave a message.</p>
          </div>

          <button
            type="button"
            className={`switch ${feedback.allowComments ? "on" : ""}`}
            onClick={() =>
              updateFeedback({
                allowComments: !feedback.allowComments,
              })
            }
            aria-label="Toggle additional comments"
          >
            <span />
          </button>
        </div>

        {feedback.allowComments && (
          <div className="field">
            <label>Comment Placeholder</label>

            <input
              value={feedback.commentPlaceholder}
              onChange={(e) =>
                updateFeedback({
                  commentPlaceholder: e.target.value,
                })
              }
            />
          </div>
        )}

        <div className="field">
          <label>Submit Button Text</label>

          <input
            value={feedback.submitText}
            onChange={(e) =>
              updateFeedback({
                submitText: e.target.value,
              })
            }
          />
        </div>
      </section>

      {/* THANK YOU */}

      <section className="editor-card">
        <div className="card-heading">
          <div className="section-number">03</div>

          <div>
            <h3>Thank You Page</h3>
            <p>Shown after feedback is submitted.</p>
          </div>
        </div>


        <label className={`media-placeholder ${mediaPreview ? "has-media" : ""}`}>
          {mediaPreview ? (
            <>
              <img src={mediaPreview} alt="Uploaded media preview" className="media-preview" />

              <div className="media-copy">
                <strong>Media uploaded</strong>
                <p>Click to replace image</p>
              </div>
            </>
          ) : (
            <>
              <div className="media-icon">＋</div>

              <div className="media-copy">
                <strong>Upload media</strong>
                <p>PNG, JPG, JPEG, GIF or Lottie/JSON</p>
              </div>
            </>
          )}

          <input
            type="file"
            accept="image/png,image/jpeg,image/gif,.json,.lottie"
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (!file) return;

              const allowedTypes = [
                "image/png",
                "image/jpeg",
                "image/gif",
                "application/json",
              ];

              if (
                !allowedTypes.includes(file.type) &&
                !file.name.toLowerCase().endsWith(".json") &&
                !file.name.toLowerCase().endsWith(".lottie")
              ) {
                e.target.value = "";
                return;
              }

              updateSection("thankYou", {
                media: file,
              });

              e.target.value = "";
            }}
          />
        </label>

        <div className="field">
          <label>Title</label>

          <input
            value={thankYou.title}
            onChange={(e) =>
              updateSection("thankYou", {
                title: e.target.value,
              })
            }
          />
        </div>

        <div className="field">
          <label>Subtitle</label>

          <textarea
            rows={3}
            value={thankYou.subtitle}
            onChange={(e) =>
              updateSection("thankYou", {
                subtitle: e.target.value,
              })
            }
          />
        </div>

        <div className="field">
          <label>Button Text</label>

          <input
            value={thankYou.buttonText}
            onChange={(e) =>
              updateSection("thankYou", {
                buttonText: e.target.value,
              })
            }
          />
        </div>
      </section>
    </div>
  );
}

export default ContentPanel;