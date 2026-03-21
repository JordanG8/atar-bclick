# Google Stitch MCP Setup Guide

You requested information on how to use **Google Stitch MCP** to design UIs recursively using AI agents like Cursor, Claude, or Antigravity. Here is the step-by-step guide to integrate it into your development workflow.

## Overview
Google Stitch is an experimental AI design platform by Google that lets AI automatically scaffold entire functional UIs, components, and layouts using Gemini 2.5 Pro. The MCP (Model Context Protocol) server bridges this capability directly into your local editor.

## Prerequisites
1. **Google Cloud Project**: You must have a GCP project with billing enabled.
2. **Stitch API Enabled**: Go to your GCP console and enable the `stitch.googleapis.com` API.
3. **Google Cloud CLI**: You must have the `gcloud` CLI installed locally.

## Setup Steps

### 1. Authenticate your local machine
Run the following command in your terminal to allow the generic auth profile to use GCP services on your behalf (specifically for the Stitch API):

```bash
gcloud auth application-default login
```

### 2. Configure your AI Editor

To add Google Stitch MCP to your AI Editor (e.g., Cursor, Claude Desktop, Antigravity), you need to append the server to your MCP configurations file.

**For Cursor or Claude Desktop**, open your MCP settings JSON (usually located at `~/.cursor/mcp.json` or `~/Library/Application Support/Claude/claude_desktop_config.json`) and add:

```json
{
  "mcpServers": {
    "google-stitch": {
      "command": "npx",
      "args": ["-y", "@google/stitch-mcp"]
    }
  }
}
```

### 3. Usage inside your Editor
Once the MCP is active, you can simply ask your AI Assistant:
> "Use Google Stitch to design a massive cinematic hero section for my barbershop, extract the React code, and save it to `app/components/StitchHero.tsx`."

The agent will automatically trigger the Stitch API, design the layout on Google's cloud UI generator, capture the "Design DNA", and fetch the raw component code straight into your local workspace.
