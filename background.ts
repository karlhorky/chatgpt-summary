chrome.action.onClicked.addListener(async (tab) => {
  if (tab.id) {
    const prompt = encodeURIComponent(
      `Summarize ${tab.url} in 5 bullet points`,
    );

    await chrome.tabs.create({
      // https://webapps.stackexchange.com/a/175084/29415
      url: `https://chat.openai.com/?q=${prompt}`,
      index: tab.index + 1,
    });
  }
});
