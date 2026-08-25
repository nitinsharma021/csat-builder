import { useEffect, useState } from "react";

function MobilePreview({ campaign, page, setPage }) {
  const { initial, feedback, thankYou, styling } = campaign;
  const thankYouMedia =
    thankYou.media && typeof thankYou.media === "string"
      ? thankYou.media
      : thankYou.media
        ? URL.createObjectURL(thankYou.media)
        : null;

  // Preview-only interaction state
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  // Reset user selections whenever preview page changes
  useEffect(() => {
    if (page !== "feedback") {
      setSelectedRating(0);
      setSelectedOption(null);
    }
  }, [page]);

  const buttonStyle = {
    background: styling.buttonColor,
    color: styling.buttonTextColor,
    height: `${styling.buttonHeight}px`,
    width: `${styling.buttonWidth}%`,
    borderRadius: `${styling.buttonRadius}px`,
  };

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="preview-wrapper">
      {/* PREVIEW TABS */}
      <div className="preview-tabs">
        <button
          className={page === "initial" ? "active" : ""}
          onClick={() => setPage("initial")}
        >
          Initial
        </button>

        <button
          className={page === "feedback" ? "active" : ""}
          onClick={() => setPage("feedback")}
        >
          Feedback
        </button>

        <button
          className={page === "thankyou" ? "active" : ""}
          onClick={() => setPage("thankyou")}
        >
          Thank You
        </button>
      </div>

      {/* PHONE */}
      <div className="phone">
        <div className="phone-speaker" />

        <div
          className="phone-screen"
          style={{
            background: styling.background,
          }}
        >
          {/* =========================================
              INITIAL PAGE
          ========================================= */}

          {page === "initial" && (
            <div
              className="mobile-card initial-card"
              style={{
                borderRadius: `${styling.popupRadius}px`,
              }}
            >
              <div className="preview-icon">✦</div>

              <h2
                style={{
                  color: styling.titleColor,
                  fontSize: `${styling.titleFontSize}px`,
                  fontWeight: styling.titleFontWeight,
                }}
              >
                {initial.title}
              </h2>

              <p
                style={{
                  color: styling.subtitleColor,
                  fontSize: `${styling.subtitleFontSize}px`,
                  fontWeight: styling.subtitleFontWeight,
                }}
              >
                {initial.subtitle}
              </p>

              <button
                className="preview-button"
                style={buttonStyle}
                onClick={() => setPage("feedback")}
              >
                {initial.buttonText}
              </button>
            </div>
          )}

          {/* =========================================
              FEEDBACK PAGE
          ========================================= */}

          {page === "feedback" && (
            <div
              className="mobile-card feedback-card"
              style={{
                borderRadius: `${styling.popupRadius}px`,
              }}
            >
              <h2
                style={{
                  color: styling.titleColor,
                  fontSize: `${styling.titleFontSize}px`,
                  fontWeight: styling.titleFontWeight,
                }}
              >
                {feedback.question}
              </h2>

              {/* STAR RATING */}
              {feedback.ratingType === "stars" ? (
                <div className="preview-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="star-button"
                      onClick={() => handleRatingClick(star)}
                      aria-label={`Rate ${star} out of 5`}
                      style={{
                        color:
                          star <= selectedRating
                            ? styling.selectedColor
                            : styling.unselectedColor,

                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      ★
                    </button>
                  ))}
                </div>
              ) : (
                /* NUMBER RATING */
                <div className="number-rating">
                  {[1, 2, 3, 4, 5].map((number) => {
                    const isSelected = selectedRating === number;

                    return (
                      <button
                        key={number}
                        type="button"
                        onClick={() => handleRatingClick(number)}
                        className={isSelected ? "selected" : ""}
                        style={{
                          background: isSelected
                            ? styling.selectedColor
                            : "transparent",

                          color: isSelected
                            ? styling.buttonTextColor
                            : styling.titleColor,

                          border: `1px solid ${
                            isSelected
                              ? styling.selectedColor
                              : styling.unselectedColor
                          }`,

                          cursor: "pointer",
                        }}
                      >
                        {number}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* FEEDBACK OPTIONS */}
              <div className="preview-options">
                {feedback.options.map((option, index) => {
                  const isSelected = selectedOption === index;

                  return (
                    <button
                      key={index}
                      type="button"
                      className={isSelected ? "selected" : ""}
                      onClick={() => handleOptionClick(index)}
                      style={{
                        background: isSelected
                          ? styling.selectedColor
                          : undefined,

                        color: isSelected
                          ? styling.buttonTextColor
                          : undefined,

                        borderColor: isSelected
                          ? styling.selectedColor
                          : undefined,

                        cursor: "pointer",
                      }}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {/* COMMENTS */}
              {feedback.allowComments && (
                <textarea
                  className="preview-comment"
                  placeholder={feedback.commentPlaceholder}
                />
              )}

              {/* SUBMIT */}
              <button
                className="preview-button"
                style={buttonStyle}
                onClick={() => setPage("thankyou")}
              >
                {feedback.submitText}
              </button>
            </div>
          )}

          {/* =========================================
              THANK YOU PAGE
          ========================================= */}

          {page === "thankyou" && (
            <div
              className="mobile-card thankyou-card"
              style={{
                borderRadius: `${styling.popupRadius}px`,
              }}
            >
              <div className="success-icon">✓</div>

              {thankYouMedia && (
                <img
                  src={thankYouMedia}
                  alt="Uploaded media"
                  className="thankyou-media"
                />
              )}

              <h2
                style={{
                  color: styling.titleColor,
                  fontSize: `${styling.titleFontSize}px`,
                  fontWeight: styling.titleFontWeight,
                }}
              >
                {thankYou.title}
              </h2>

              <p
                style={{
                  color: styling.subtitleColor,
                  fontSize: `${styling.subtitleFontSize}px`,
                  fontWeight: styling.subtitleFontWeight,
                }}
              >
                {thankYou.subtitle}
              </p>

              <button
                className="preview-button"
                style={buttonStyle}
                onClick={() => setPage("initial")}
              >
                {thankYou.buttonText}
              </button>
            </div>
          )}
        </div>

        <div className="phone-home-indicator" />
      </div>
    </div>
  );
}

export default MobilePreview;