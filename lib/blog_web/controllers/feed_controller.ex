defmodule BlogWeb.FeedController do
  use BlogWeb, :controller

  def rss(conn, _params) do
    conn
      |> put_resp_content_type("application/rss+xml")
      |> render(:rss, %{articles: nil})
  end
end
