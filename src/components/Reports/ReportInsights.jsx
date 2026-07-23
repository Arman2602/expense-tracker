import {
  TrendingUp,
  CalendarDays,
  Wallet,
  Lightbulb
} from "lucide-react";

const statusClasses = {
  positive: "bg-green-500/15 text-green-400",
  negative: "bg-red-500/15 text-red-400",
  neutral: "bg-yellow-500/15 text-yellow-400",
};

const InsightRow = ({
  icon: Icon,
  title,
  description,
  value,
  detail,
  iconClass,
}) => {
  return (
    <div
      className="
        flex flex-col gap-4 py-5
        first:pt-0 last:pb-0
        sm:flex-row sm:items-center sm:justify-between
      "
    >
      <div className="flex items-center gap-4">
        <div
          className={`
            flex h-11 w-11 shrink-0
            items-center justify-center
            rounded-lg
            ${iconClass}
          `}
        >
          <Icon size={21} />
        </div>

        <div>
          <h3 className="font-medium text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            {description}
          </p>
        </div>
      </div>

      <div className="pl-14 sm:pl-0 sm:text-right">
        <div className="inline-flex flex-col sm:items-end">
          <span
            className="
        inline-flex w-fit items-center
        rounded-lg
        border border-slate-700
        bg-slate-800
        px-3 py-1.5
        text-sm font-semibold
        capitalize text-white
      "
          >
            {value}
          </span>

          <p className="mt-2 text-sm text-slate-400">
            {detail}
          </p>
        </div>
      </div>
    </div>
  );
};

const ReportInsights = ({ insights }) => {
  const {
    topCategory,
    topMonth,
    savingsStatus,
    hasData
  } = insights;
  return (
    <section
      className="
        rounded-xl
        border border-slate-800
        bg-slate-900
        p-4 sm:p-6
      "
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white sm:text-xl">
          Financial Insights
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Key highlights from your spending activity
        </p>
      </div>

      {!hasData ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-slate-400">
            <Lightbulb size={22} />
          </div>

          <h3 className="mt-4 font-medium text-white">
            No insights available
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
            Add transactions or adjust your report filters to generate financial
            insights.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-slate-700">
          {/* Insight Rows */}
          <div className="divide-y divide-slate-700">
            {topCategory && (
              <InsightRow
                icon={TrendingUp}
                title="Top Spending Category"
                description="Your largest expense category"
                value={topCategory.category}
                detail={`${topCategory.percentage.toFixed(
                  1
                )}% of total expenses`}
                iconClass="bg-purple-500/15 text-purple-400"
              />
            )}

            {topMonth && (
              <InsightRow
                icon={CalendarDays}
                title="Highest Spending Month"
                description="Your peak spending period"
                value={`${topMonth.month} ${topMonth.year}`}
                detail={`₹${topMonth.amount.toLocaleString()} spent`}
                iconClass="bg-blue-500/15 text-blue-400"
              />
            )}

            {savingsStatus && (
              <InsightRow
                icon={Wallet}
                title="Savings Status"
                description="Your financial performance"
                value={savingsStatus.status}
                detail={savingsStatus.message}
                iconClass={
                  statusClasses[savingsStatus.status] ||
                  statusClasses.neutral
                }
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ReportInsights;