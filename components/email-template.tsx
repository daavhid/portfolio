import React from 'react'
// type formVal = FormDataEntryValue | null

const EmailTemplate = ({
  email,
  message,
}: {
  email: string;
  message: string;
}) => {
  return (
    <html>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#f6f5f6",
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        }}
      >
        <table
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          style={{ padding: "40px 0" }}
        >
          <tr>
            <td align="center">
              <table
                width="600"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  padding: "30px",
                  textAlign: "left",
                }}
              >
                <tr>
                  <td>
                    <h2
                      style={{
                        margin: "0 0 20px 0",
                        color: "#111827",
                        fontSize: "24px",
                        fontWeight: "700",
                      }}
                    >
                      New Contact Message
                    </h2>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#374151",
                        lineHeight: "1.5",
                      }}
                    >
                      {message}
                    </p>

                    <div
                      style={{
                        marginTop: "30px",
                        padding: "15px",
                        backgroundColor: "#f9fafb",
                        borderRadius: "6px",
                        fontSize: "14px",
                        color: "#6b7280",
                      }}
                    >
                      <strong>From:</strong> {email}
                    </div>

                    <footer
                      style={{
                        marginTop: "40px",
                        fontSize: "12px",
                        color: "#9ca3af",
                        textAlign: "center",
                      }}
                    >
                      &copy; {new Date().getFullYear()} Your Company. All rights
                      reserved.
                    </footer>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
};

export default EmailTemplate;
