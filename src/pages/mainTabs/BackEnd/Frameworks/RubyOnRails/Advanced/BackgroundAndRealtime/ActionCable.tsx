import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ActionCable = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Advanced/BackgroundAndRealtime/ActionCable';

  return (
    <>
      <PageLayout>
        <PageTitle title="Action Cable" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ActionCable;
