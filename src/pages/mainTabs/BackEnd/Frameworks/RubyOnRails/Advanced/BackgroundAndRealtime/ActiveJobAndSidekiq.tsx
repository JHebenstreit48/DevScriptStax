import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ActiveJobAndSidekiq = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Advanced/BackgroundAndRealtime/ActiveJobAndSidekiq';

  return (
    <>
      <PageLayout>
        <PageTitle title="Active Job & Sidekiq" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ActiveJobAndSidekiq;
