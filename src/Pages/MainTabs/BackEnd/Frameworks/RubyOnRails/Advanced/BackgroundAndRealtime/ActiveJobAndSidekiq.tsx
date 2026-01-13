import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ActiveJobAndSidekiq = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Advanced/BackgroundAndRealtime/ActiveJobAndSidekiq';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Active Job & Sidekiq" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ActiveJobAndSidekiq;
