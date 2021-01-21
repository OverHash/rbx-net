-- Compiled with roblox-ts v1.0.0-beta.14
local TS = require(script.Parent.TS.RuntimeLib)
local AsyncFunction = TS.import(script, script, "ServerAsyncFunction").default
local _0 = TS.import(script, script, "ServerEvent")
local ServerEvent = _0.default
local Event = _0.default
local CrossServerEvent = TS.import(script, script, "GlobalServerEvent").default
local CreateListener = TS.import(script, script, "CreateServerListener").default
local Function = TS.import(script, script, "ServerFunction").default
local config = TS.import(script, script.Parent, "configuration")
local function CreateEvent(name, middleware)
	return ServerEvent.new(name, middleware)
end
local CreateSender = CreateEvent
local function CreateAsyncFunction(name, middleware)
	if middleware == nil then
		middleware = {}
	end
	return AsyncFunction.new(name, middleware)
end
local function CreateEvents(...)
	local evts = { ... }
	local evtMap = {}
	for _, id in ipairs(evts) do
		local _1 = id
		if type(_1) == "string" then
			local _2 = evtMap
			local _3 = ServerEvent.new(id)
			-- ▼ Array.push ▼
			_2[#_2 + 1] = _3
			-- ▲ Array.push ▲
		else
			local _2 = id
			local name = _2[1]
			local middleware = { select(2, unpack(id)) }
			local _3 = evtMap
			local _4 = ServerEvent.new(name, middleware)
			-- ▼ Array.push ▼
			_3[#_3 + 1] = _4
			-- ▲ Array.push ▲
		end
	end
	return unpack(evtMap)
end
local SetConfiguration = config.SetConfiguration
local GetConfiguration = config.GetConfiguration
return {
	CreateEvent = CreateEvent,
	CreateAsyncFunction = CreateAsyncFunction,
	CreateEvents = CreateEvents,
	Event = Event,
	AsyncFunction = AsyncFunction,
	Function = Function,
	CrossServerEvent = CrossServerEvent,
	CreateListener = CreateListener,
	CreateSender = CreateSender,
	SetConfiguration = SetConfiguration,
	GetConfiguration = GetConfiguration,
}
